package ch.zhaw.ads;

import org.junit.platform.engine.TestDescriptor;
import org.junit.platform.engine.TestExecutionResult;
import org.junit.platform.engine.discovery.DiscoverySelectors;
import org.junit.platform.launcher.Launcher;
import org.junit.platform.launcher.LauncherDiscoveryRequest;
import org.junit.platform.launcher.TestExecutionListener;
import org.junit.platform.launcher.TestIdentifier;
import org.junit.platform.launcher.core.LauncherDiscoveryRequestBuilder;
import org.junit.platform.launcher.core.LauncherFactory;

import java.io.*;
import java.util.LinkedList;
import java.util.List;

public class ExBoxJUnit implements CommandExecutor {
    @Override
    public String execute(String testFile) throws Exception {
        final List<String> successfulTests = new LinkedList<>();
        final List<TestFailure> failedResults = new LinkedList<>();

        StringBuilder output = new StringBuilder();

        output.append("\nRUN TESTS ").append(new File(testFile).getName().split("\\.")[0]).append("\n");

        LauncherDiscoveryRequest request = LauncherDiscoveryRequestBuilder.request()
                .selectors(DiscoverySelectors.selectClass(ServerFactory.loadClass(testFile)))
                .build();

        Launcher launcher = LauncherFactory.create();
        launcher.discover(request);
        launcher.registerTestExecutionListeners(new TestExecutionListener() {
            @Override
            public void executionFinished(TestIdentifier testIdentifier, TestExecutionResult testExecutionResult) {
                if (testIdentifier.getType() != TestDescriptor.Type.TEST) {
                    return;
                }

                if (testExecutionResult.getStatus() == TestExecutionResult.Status.SUCCESSFUL) {
                    successfulTests.add(testIdentifier.getDisplayName());
                } else {
                    failedResults.add(new TestFailure(testIdentifier.getDisplayName(),
                            testExecutionResult.getThrowable().orElse(null)));
                }
            }
        });
        launcher.execute(request);

        for (String testName : successfulTests) {
            output.append(testName).append(": OK\n");
        }
        for (TestFailure result : failedResults) {
            output.append(result.getName()).append(": ERROR\n");
            String error = result.errorString();
            if (!error.isEmpty()) {
                output.append(error).append("\n");
            }
        }
        boolean wasSuccessful = failedResults.isEmpty();
        output.append("TESTS ").append(wasSuccessful ? "PASSED" : "FAILED").append(": ")
                .append(wasSuccessful ? "OK \u263a" : failedResults.size() + " ERRORS").append("\n");
        return output.toString();
    }

    private static class TestFailure {
        private final String name;
        private final Throwable throwable;

        TestFailure(String name, Throwable throwable) {
            this.name = name;
            this.throwable = throwable;
        }

        public String getName() {
            return name;
        }

        public String errorString() {
            if (throwable == null) {
                return "";
            }
            try (StringWriter stringWriter = new StringWriter();
                 PrintWriter printWriter = new PrintWriter(stringWriter)) {
                throwable.printStackTrace(printWriter);
                return stringWriter.toString();
            } catch (IOException e) {
                throw new UncheckedIOException(e);
            }
        }
    }
}