package ch.zhaw.ads;

/**
 * AnyServer -- Praktikum Experimentierkasten -- ADS
 *
 * @author E. Mumprecht
 * @version 1.0 -- Geruest fuer irgendeinen Server
 */
public class AnyServer implements CommandExecutor {
    //----- Dies implementiert das CommandExecutor Interface.
    @Override
    public String execute(String command) {
        return "Die Eingabe ist \"" + command + "\"\n";
    }
}
