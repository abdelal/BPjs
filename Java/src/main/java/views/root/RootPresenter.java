package views.root;


import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.scene.control.Tab;
import javafx.scene.layout.AnchorPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import views.blockly.BlocklyView;
import views.mainview.MainboardView;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ResourceBundle;

public class RootPresenter implements Initializable {

    @FXML
    private Tab blocklyButton;

    @FXML
    private AnchorPane blocklyPane;

    @FXML
    private Tab javaButton;

    @FXML
    private AnchorPane javaPane;

    private MainboardView mainboardView;
    private BlocklyView blocklyView;

    public void initialize(URL location, ResourceBundle resources) {
        mainboardView=new MainboardView();
        blocklyView=new BlocklyView();
        mainboardView.getViewAsync(javaPane.getChildren()::add);
        blocklyView.getViewAsync(blocklyPane.getChildren()::add);



    }

}
