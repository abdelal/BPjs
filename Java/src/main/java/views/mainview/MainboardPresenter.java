package views.mainview;


import com.jfoenix.controls.JFXListView;
import com.jfoenix.controls.JFXTextArea;
import il.ac.bgu.cs.bp.bpjs.bprogram.runtimeengine.BProgramRunner;
import il.ac.bgu.cs.bp.bpjs.bprogram.runtimeengine.StringBProgram;
import il.ac.bgu.cs.bp.bpjs.bprogram.runtimeengine.listeners.InMemoryEventLoggingListener;
import il.ac.bgu.cs.bp.bpjs.bprogram.runtimeengine.listeners.PrintBProgramRunnerListener;
import il.ac.bgu.cs.bp.bpjs.events.BEvent;
import il.ac.bgu.cs.bp.bpjs.eventsets.EventSet;
import il.ac.bgu.cs.bp.bpjs.exceptions.BPjsCodeEvaluationException;
import il.ac.bgu.cs.bp.bpjs.verification.DfsBProgramVerifier;
import il.ac.bgu.cs.bp.bpjs.verification.VerificationResult;
import javafx.application.Platform;
import javafx.fxml.FXML;
import javafx.fxml.Initializable;
import javafx.geometry.Insets;
import javafx.scene.control.Alert;
import javafx.scene.control.Label;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.GridPane;
import javafx.scene.web.WebEngine;
import javafx.scene.web.WebView;
import javafx.stage.Window;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.filefilter.WildcardFileFilter;
import org.controlsfx.control.PopOver;
import org.controlsfx.control.textfield.CustomTextField;
import org.fxmisc.richtext.CodeArea;
import org.fxmisc.richtext.LineNumberFactory;

import java.awt.*;
import java.io.*;
import java.net.URL;
import java.util.Collection;
import java.util.LinkedList;
import java.util.ResourceBundle;
public class MainboardPresenter implements Initializable {



    @FXML
    private AnchorPane mainPane;

        @FXML
        private JFXTextArea inputField;

        @FXML
        private JFXTextArea logfield;

        @FXML
        private CodeArea codearea;

        @FXML
        private Button eventtestButton;

         @FXML
        private Button loadButton;

        @FXML
        private JFXListView<?> bThreadList;


        @FXML
        private Button getEventtestButton3;

        @FXML
        private CustomTextField eventname;

        @FXML
        private CustomTextField eventdata;

    DfsBProgramVerifier dfsBProgramVerifier ;
            BProgramRunner rnr;
    StringBProgram bprog;
    boolean flag =true;
            InMemoryEventLoggingListener listener;

    private static PopOver errorMessageDisplay;

    public void initialize(URL location, ResourceBundle resources) {


        codearea.setParagraphGraphicFactory(LineNumberFactory.get(codearea));
        listener=new InMemoryEventLoggingListener();



        logfield.setEditable(false);
             if (flag)
              redirectConsole();
             flag=false;
       codearea.richChanges()
                .filter(ch -> !ch.getInserted().equals(ch.getRemoved())) // XXX
                .subscribe(change -> {
                    codearea.setStyleSpans(0, KeyWordsCodeArea.computeHighlighting(codearea.getText()));
                });
        codearea.replaceText(0, 0, "");
        }




        public void runbprogram(){

            Thread thread=new Thread(() -> {
                try {

                    bprog= new StringBProgram(codearea.getText());
                    dfsBProgramVerifier = new DfsBProgramVerifier();
                    /*                 bprog.va*/
                    bprog.setDaemonMode(true);
                    rnr = new BProgramRunner(bprog);
                   rnr.addListener(new PrintBProgramRunnerListener() );
                    rnr.start();

                        }  catch (Exception e) {
                    if(e instanceof BPjsCodeEvaluationException){


                 Platform.runLater(()->createdialog());
                        createErrorPopOver("error");
                       //  e.printStackTrace();
                    }


                }
            });
            thread.start();

        }

    public static void hideErrorMessageDisplay() {
        if (errorMessageDisplay != null)
            errorMessageDisplay.hide();
    }

    private static void createErrorPopOver(String errorMessage) {
        Label errorLabel = new Label(errorMessage);
        errorLabel.setId("validation-error");
        errorLabel.setPadding(new Insets(0, 10, 0, 10));
        errorLabel.setOnMouseClicked(e -> hideErrorMessageDisplay());

        errorMessageDisplay = new PopOver(errorLabel);
        errorMessageDisplay.setDetachable(true);
      //  errorMessageDisplay.setDetachedTitle("Close");
        errorMessageDisplay.setArrowIndent(5);
    }

    private Alert createAlert(Alert.AlertType type) {
        Alert dlg = new Alert(type, "");
        return dlg;
    }

    void createdialog(){
        Alert dlg = createAlert(Alert.AlertType.ERROR);
        dlg.setTitle("Error!");
        String optionalMasthead = "Error";

        dlg.getDialogPane().setContentText("the program is not valid");

        showDialog(dlg);
    }
    private void showDialog(javafx.scene.control.Dialog<?> dlg) {
            dlg.initOwner(mainPane.getScene().getWindow());
            dlg.show();

    }


    public void redirectConsole(){
    OutputStream out = new OutputStream() {
        @Override
        public void write(int b) {
            appendText(String.valueOf((char) b));
        }
    };
    System.setOut(new PrintStream(out, true));

}

    public void appendText(String str) {
        Platform.runLater(() -> logfield.appendText(str));

    }

    public String readfiles() throws IOException {
        StringBuilder builder = new StringBuilder();
        String path = new File(".").getCanonicalPath();
        File dir = new File(path);
        FileFilter fileFilter = new WildcardFileFilter("*.js");
        File[] files = dir.listFiles(fileFilter);

        for (int i = 0; i < files.length; i++) {
            builder.append(FileUtils.readFileToString(files[i]));
            builder.append("\n");
        }
        codearea.replaceText(builder.toString());

        String code=builder.toString();
        if (code.equals(""))
            System.out.println("no files where found , if you want to load Files please add this to the dir of this program");
        return code;
    }


public void clearConsole(){
    logfield.setText("");
}


       public void requestevent(){
           String data=eventdata.getText();
        BEvent event= new BEvent(eventname.getText(),data);
        if(!eventname.getText().equalsIgnoreCase(""))
               if (bprog!=null)
            bprog.enqueueExternalEvent(event);

       }



       public void requesthelloevent(){
        bprog.enqueueExternalEvent(new BEvent("Hello"));

       }

}