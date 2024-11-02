package ch.zhaw.ads;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.BeforeEach;

import java.util.StringTokenizer;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class ADS4_2_test {
    HilbertServer hlb;
    Turtle turtle;
    final double EPS = 1E-1;

    double angle(double x1, double y1, double x2, double y2,
                 double x3, double y3, double x4, double y4) {
        double ax, ay, bx, by;
        // https://www.frustfrei-lernen.de/mathematik/schnittwinkel-zweier-geraden.html
        ax = x2 - x1;
        ay = y2 - y1;
        bx = x4 - x3;
        by = y4 - y3;

        double a = Math.acos(
                (ax * bx + ay * by)
                        / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by)));
        return a / Math.PI * 180;
    }

    double angle(String line1, String line2) {
        StringTokenizer tok = new StringTokenizer(line1, " <>=/,\"\n");
        tok.nextToken(); // line
        tok.nextToken();
        double x1 = Double.parseDouble(tok.nextToken());
        tok.nextToken();
        double y1 = Double.parseDouble(tok.nextToken());
        tok.nextToken();
        double x2 = Double.parseDouble(tok.nextToken());
        tok.nextToken();
        double y2 = Double.parseDouble(tok.nextToken());
        tok = new StringTokenizer(line2, " <>=/,\"\n");
        tok.nextToken(); // line
        tok.nextToken();
        double x3 = Double.parseDouble(tok.nextToken());
        tok.nextToken();
        double y3 = Double.parseDouble(tok.nextToken());
        tok.nextToken();
        double x4 = Double.parseDouble(tok.nextToken());
        tok.nextToken();
        double y4 = Double.parseDouble(tok.nextToken());
        return angle(x1, y1, x2, y2, x3, y3, x4, y4);
    }

    @BeforeEach
    public void setUp() {
        hlb = new HilbertServer();
        turtle = new Turtle();
    }

    private void hilbert(int depth, double dist, double angle) {
        if (depth >= 0) {
            turtle.turn(-angle);
            hilbert(depth-1, dist, -angle);
            turtle.move(dist);
            turtle.turn(angle);
            hilbert(depth-1, dist, angle);
            turtle.move(dist);
            hilbert(depth-1, dist, angle);
            turtle.turn(angle);
            turtle.move(dist);
            hilbert(depth-1, dist, -angle);
            turtle.turn(-angle);
        }
    }

    @Test
    public void testCountEdges() {
        turtle.clear();
        hilbert(3, .4, -90);
        String[] linesGood = Turtle.instance().getTrace().split("\n");
        turtle.clear();
        hlb.execute("3");
        String[] lines = Turtle.instance().getTrace().split("\n");
        assertEquals(linesGood.length, lines.length, "Count Edges");
    }

    @Test
    public void testAngles() {
        turtle.clear();
        hilbert(3, .4, -90);
        String[] linesGood = Turtle.instance().getTrace().split("\n");
        turtle.clear();
        hlb.execute("3");
        String[] lines = Turtle.instance().getTrace().split("\n");
        for (int i = 0; i < linesGood.length -1; i++) {
            assertEquals(angle(linesGood[i], linesGood[i+1]), angle(lines[i], lines[i+1]), EPS, "Angle "+i);
        }
    }
}
