
import com.airhacks.afterburner.injection.Injector;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.stage.Stage;
import views.blockly.BlocklyView;
import views.root.RootView;


public class Main extends Application {

    public void start(Stage stage) throws Exception{
        System.setProperty("happyEnding", " Enjoy the flight!");
        RootView appView;
        appView = new RootView();
        Scene scene = new Scene(appView.getView());
        stage.setTitle("Bdjs ");
        final String uri = getClass().getResource("app.css").toExternalForm();
        String str= getClass().getResource("java-keywords.css").toExternalForm();
        scene.getStylesheets().add("bootstrapfx.css");
        scene.getStylesheets().add(uri);
        scene.getStylesheets().add(str);
        stage.setScene(scene);
        stage.show();
    }


    public static void main(String[] args) {
        launch(args);
    }


    @Override
    public void stop() throws Exception {
        Injector.forgetAll();
    }

}
