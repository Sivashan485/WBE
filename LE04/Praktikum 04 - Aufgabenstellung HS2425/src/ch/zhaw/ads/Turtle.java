package ch.zhaw.ads;

public class Turtle {
    private static StringBuffer b;
    private static double x, y;
    private static double angle;
    private static Turtle theTurtle;

    public static Turtle instance() {
        if (theTurtle == null) theTurtle = new Turtle();
        return theTurtle;
    }

    public Turtle() {
        this(0, 0);
    }

    public Turtle(double x, double y) {
        reset(x, y);
        theTurtle = this;
    }

    public void reset(double x, double y) {
        b = new StringBuffer();
        this.x = x;
        this.y = y;
        angle = 0;
    }

    public void clear() {
        reset(0, 0);
    }

    public String getTrace() {
        return b.toString();
    }

    private double round(double d) {
        return Math.round(d * 10000) / 10000.0;
    }

    public void move(double dist) {
        b.append("<line x1=\"");
        b.append(Double.toString(round(x)));
        b.append("\" y1=\"");
        b.append(Double.toString(round(y)));
        b.append("\" ");
        x += Math.cos(angle) * dist;
        y += Math.sin(angle) * dist;
        b.append("x2=\"");
        b.append(Double.toString(round(x)));
        b.append("\" y2=\"");
        b.append(Double.toString(round(y)));
        b.append("\"/>\n");
    }

    public void turn(double turnAngle) {
        angle += turnAngle * Math.PI / 180;
    }
}
