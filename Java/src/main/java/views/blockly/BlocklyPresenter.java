package views.blockly;


import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;

import java.io.*;
import java.net.URL;
import java.util.ResourceBundle;

public class BlocklyPresenter implements Initializable {


    @FXML
    private WebView webView;

    WebEngine webEngine;



    public void initialize(URL location, ResourceBundle resources) {

        webEngine = webView.getEngine();
        try {
            loadWebView();
        } catch (IOException e) {
            e.printStackTrace();
        }


    }


    void loadWebView() throws IOException {

        String path = new File(".").getCanonicalPath() + "\\blockly\\index.html";
        String url = "file:///"+path;
        webEngine.load(url);
    }
}
