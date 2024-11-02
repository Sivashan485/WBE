package ch.zhaw.ads;

public class TestGraphicServer implements CommandExecutor {
    String figure = "<line x1=\"0.1\" y1 = \"0.8\" x2=\"0.9\" y2 = \"0.8\" />\n"+
            "<line x1=\"0.2\" y1 = \"0.4\" x2=\"0.2\" y2 = \"0.8\" />\n"+
            "<line x1=\"0.3\" y1 = \"0.4\" x2=\"0.3\" y2 = \"0.8\" />\n"+
            "<line x1=\"0.3\" y1 = \"0.4\" x2=\"0.7\" y2 = \"0.4\" />\n"+
            "<line x1=\"0.3\" y1 = \"0.6\" x2=\"0.4\" y2 = \"0.6\" />\n"+
            "<line x1=\"0.5\" y1 = \"0.8\" x2=\"0.5\" y2 = \"0.6\" />\n"+
            "<line x1=\"0.5\" y1 = \"0.6\" x2=\"0.7\" y2 = \"0.6\" />\n"+
            "<line x1=\"0.7\" y1 = \"0.6\" x2=\"0.7\" y2 = \"0.4\" />\n"+
            "<line x1=\"0.8\" y1 = \"0.4\" x2=\"0.8\" y2 = \"0.8\" />\n";

    public String execute(String command) {
        return figure;
    }
}
