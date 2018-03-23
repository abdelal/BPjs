package views.mainview;

import org.fxmisc.richtext.model.StyleSpans;
import org.fxmisc.richtext.model.StyleSpansBuilder;

import java.util.Collection;
import java.util.Collections;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class KeyWordsCodeArea {
    static final String[] BPJSKEYWORDS = new String[]{
            "bp", "registerBThread", "bsync", "Event", "request", "block", "waitFor", "interrupt",
            "log", "info", "fine", "warn", "off", "setInterruptHandler", "enqueueExternalEvent", "EventSet",


    };
    static final String[] KEYWORDS = new String[]{


            "break", "case", "catch", "continue", "debugger", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with",
            "class", "enum", "export", "extends", "import", "super", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield",
            "const", "null", "true", "false",
            "Array", "ArrayBuffer", "Boolean", "Date", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "Error", "eval", "EvalError", "Float32Array", "Float64Array", "Function", "Infinity", "Int16Array", "Int32Array", "Int8Array", "isFinite", "isNaN", "Iterator", "JSON", "Math", "NaN", "Number", "Object", "parseFloat", "parseInt", "RangeError", "ReferenceError", "RegExp", "StopIteration", "String", "SyntaxError", "TypeError", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray", "undefined", "uneval", "URIError",
            "applicationCache", "closed", "Components", "content", "_content", "controllers", "crypto", "defaultStatus", "dialogArguments", "directories", "document", "frameElement", "frames", "fullScreen", "globalStorage", "history", "innerHeight", "innerWidth", "length", "location", "locationbar", "localStorage", "menubar", "messageManager", "mozAnimationStartTime", "mozInnerScreenX", "mozInnerScreenY", "mozPaintCount", "name", "navigator", "opener", "outerHeight", "outerWidth", "pageXOffset", "pageYOffset", "parent", "performance", "personalbar", "pkcs11", "returnValue", "screen", "screenX", "screenY", "scrollbars", "scrollMaxX", "scrollMaxY", "scrollX", "scrollY", "self", "sessionStorage", "sidebar", "status", "statusbar", "toolbar", "top", "URL", "window",
            "addEventListener", "alert", "atob", "back", "blur", "btoa", "captureEvents", "clearImmediate", "clearInterval", "clearTimeout", "close", "confirm", "disableExternalCapture", "dispatchEvent", "dump", "enableExternalCapture", "escape", "find", "focus", "forward", "GeckoActiveXObject", "getAttention", "getAttentionWithCycleCount", "getComputedStyle", "getSelection", "home", "matchMedia", "maximize", "minimize", "moveBy", "moveTo", "mozRequestAnimationFrame", "open", "openDialog", "postMessage", "print", "prompt", "QueryInterface", "releaseEvents", "removeEventListener", "resizeBy", "resizeTo", "restore", "routeEvent", "scroll", "scrollBy", "scrollByLines", "scrollByPages", "scrollTo", "setCursor", "setImmediate", "setInterval", "setResizable", "setTimeout", "showModalDialog", "sizeToContent", "stop", "unescape", "updateCommands", "XPCNativeWrapper", "XPCSafeJSObjectWrapper",
            "onabort", "onbeforeunload", "onblur", "onchange", "onclick", "onclose", "oncontextmenu", "ondevicemotion", "ondeviceorientation", "ondragdrop", "onerror", "onfocus", "onhashchange", "onkeydown", "onkeypress", "onkeyup", "onload", "onmousedown", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmozbeforepaint", "onpaint", "onpopstate", "onreset", "onresize", "onscroll", "onselect", "onsubmit", "onunload", "onpageshow", "onpagehide",
            "Image", "Option", "Worker",
            "Event", "Range", "File", "FileReader", "Blob", "BlobBuilder",
            "Attr", "CDATASection", "CharacterData", "Comment", "console", "DocumentFragment", "DocumentType", "DomConfiguration", "DOMError", "DOMErrorHandler", "DOMException", "DOMImplementation", "DOMImplementationList", "DOMImplementationRegistry", "DOMImplementationSource", "DOMLocator", "DOMObject", "DOMString", "DOMStringList", "DOMTimeStamp", "DOMUserData", "Entity", "EntityReference", "MediaQueryList", "MediaQueryListListener", "NameList", "NamedNodeMap", "Node", "NodeFilter", "NodeIterator", "NodeList", "Notation", "Plugin", "PluginArray", "ProcessingInstruction", "SharedWorker", "Text", "TimeRanges", "Treewalker", "TypeInfo", "UserDataHandler", "Worker", "WorkerGlobalScope",
            "HTMLDocument", "HTMLElement", "HTMLAnchorElement", "HTMLAppletElement", "HTMLAudioElement", "HTMLAreaElement", "HTMLBaseElement", "HTMLBaseFontElement", "HTMLBodyElement", "HTMLBRElement", "HTMLButtonElement", "HTMLCanvasElement", "HTMLDirectoryElement", "HTMLDivElement", "HTMLDListElement", "HTMLEmbedElement", "HTMLFieldSetElement", "HTMLFontElement", "HTMLFormElement", "HTMLFrameElement", "HTMLFrameSetElement", "HTMLHeadElement", "HTMLHeadingElement", "HTMLHtmlElement", "HTMLHRElement", "HTMLIFrameElement", "HTMLImageElement", "HTMLInputElement", "HTMLKeygenElement", "HTMLLabelElement", "HTMLLIElement", "HTMLLinkElement", "HTMLMapElement", "HTMLMenuElement", "HTMLMetaElement", "HTMLModElement", "HTMLObjectElement", "HTMLOListElement", "HTMLOptGroupElement", "HTMLOptionElement", "HTMLOutputElement", "HTMLParagraphElement", "HTMLParamElement", "HTMLPreElement", "HTMLQuoteElement", "HTMLScriptElement", "HTMLSelectElement", "HTMLSourceElement", "HTMLSpanElement", "HTMLStyleElement", "HTMLTableElement", "HTMLTableCaptionElement", "HTMLTableCellElement", "HTMLTableDataCellElement", "HTMLTableHeaderCellElement", "HTMLTableColElement", "HTMLTableRowElement", "HTMLTableSectionElement", "HTMLTextAreaElement", "HTMLTimeElement", "HTMLTitleElement", "HTMLTrackElement", "HTMLUListElement", "HTMLUnknownElement", "HTMLVideoElement",
            "HTMLCanvasElement", "CanvasRenderingContext2D", "CanvasGradient", "CanvasPattern", "TextMetrics", "ImageData", "CanvasPixelArray", "HTMLAudioElement", "HTMLVideoElement", "NotifyAudioAvailableEvent", "HTMLCollection", "HTMLAllCollection", "HTMLFormControlsCollection", "HTMLOptionsCollection", "HTMLPropertiesCollection", "DOMTokenList", "DOMSettableTokenList", "DOMStringMap", "RadioNodeList",
            "SVGDocument", "SVGElement", "SVGAElement", "SVGAltGlyphElement", "SVGAltGlyphDefElement", "SVGAltGlyphItemElement", "SVGAnimationElement", "SVGAnimateElement", "SVGAnimateColorElement", "SVGAnimateMotionElement", "SVGAnimateTransformElement", "SVGSetElement", "SVGCircleElement", "SVGClipPathElement", "SVGColorProfileElement", "SVGCursorElement", "SVGDefsElement", "SVGDescElement", "SVGEllipseElement", "SVGFilterElement", "SVGFilterPrimitiveStandardAttributes", "SVGFEBlendElement", "SVGFEColorMatrixElement", "SVGFEComponentTransferElement", "SVGFECompositeElement", "SVGFEConvolveMatrixElement", "SVGFEDiffuseLightingElement", "SVGFEDisplacementMapElement", "SVGFEDistantLightElement", "SVGFEFloodElement", "SVGFEGaussianBlurElement", "SVGFEImageElement", "SVGFEMergeElement", "SVGFEMergeNodeElement", "SVGFEMorphologyElement", "SVGFEOffsetElement", "SVGFEPointLightElement", "SVGFESpecularLightingElement", "SVGFESpotLightElement", "SVGFETileElement", "SVGFETurbulenceElement", "SVGComponentTransferFunctionElement", "SVGFEFuncRElement", "SVGFEFuncGElement", "SVGFEFuncBElement", "SVGFEFuncAElement", "SVGFontElement", "SVGFontFaceElement", "SVGFontFaceFormatElement", "SVGFontFaceNameElement", "SVGFontFaceSrcElement", "SVGFontFaceUriElement", "SVGForeignObjectElement", "SVGGElement", "SVGGlyphElement", "SVGGlyphRefElement", "SVGGradientElement", "SVGLinearGradientElement", "SVGRadialGradientElement", "SVGHKernElement", "SVGImageElement", "SVGLineElement", "SVGMarkerElement", "SVGMaskElement", "SVGMetadataElement", "SVGMissingGlyphElement", "SVGMPathElement", "SVGPathElement", "SVGPatternElement", "SVGPolylineElement", "SVGPolygonElement", "SVGRectElement", "SVGScriptElement", "SVGStopElement", "SVGStyleElement", "SVGSVGElement", "SVGSwitchElement", "SVGSymbolElement", "SVGTextElement", "SVGTextPathElement", "SVGTitleElement", "SVGTRefElement", "SVGTSpanElement", "SVGUseElement", "SVGViewElement", "SVGVKernElement",
            "SVGAngle", "SVGColor", "SVGICCColor", "SVGElementInstance", "SVGElementInstanceList", "SVGLength", "SVGLengthList", "SVGMatrix", "SVGNumber", "SVGNumberList", "SVGPaint", "SVGPoint", "SVGPointList", "SVGPreserveAspectRatio", "SVGRect", "SVGStringList", "SVGTransform", "SVGTransformList",
            "SVGAnimatedAngle", "SVGAnimatedBoolean", "SVGAnimatedEnumeration", "SVGAnimatedInteger", "SVGAnimatedLength", "SVGAnimatedLengthList", "SVGAnimatedNumber", "SVGAnimatedNumberList", "SVGAnimatedPreserveAspectRatio", "SVGAnimatedRect", "SVGAnimatedString", "SVGAnimatedTransformList",
            "SVGPathSegList", "SVGPathSeg", "SVGPathSegArcAbs", "SVGPathSegArcRel", "SVGPathSegClosePath", "SVGPathSegCurvetoCubicAbs", "SVGPathSegCurvetoCubicRel", "SVGPathSegCurvetoCubicSmoothAbs", "SVGPathSegCurvetoCubicSmoothRel", "SVGPathSegCurvetoQuadraticAbs", "SVGPathSegCurvetoQuadraticRel", "SVGPathSegCurvetoQuadraticSmoothAbs", "SVGPathSegCurvetoQuadraticSmoothRel", "SVGPathSegLinetoAbs", "SVGPathSegLinetoHorizontalAbs", "SVGPathSegLinetoHorizontalRel", "SVGPathSegLinetoRel", "SVGPathSegLinetoVerticalAbs", "SVGPathSegLinetoVerticalRel", "SVGPathSegMovetoAbs", "SVGPathSegMovetoRel", "ElementTimeControl", "TimeEvent", "SVGAnimatedPathData",
            "SVGAnimatedPoints", "SVGColorProfileRule", "SVGCSSRule", "SVGExternalResourcesRequired", "SVGFitToViewBox", "SVGLangSpace", "SVGLocatable", "SVGRenderingIntent", "SVGStylable", "SVGTests", "SVGTextContentElement", "SVGTextPositioningElement", "SVGTransformable", "SVGUnitTypes", "SVGURIReference", "SVGViewSpec", "SVGZoomAndPan"

    };
    static final String KEYWORD_PATTERN = "\\b(" + String.join("|", KEYWORDS) + ")\\b";
    static final String BPJSKEYWORD_PATTERN = "\\b(" + String.join("|", BPJSKEYWORDS) + ")\\b";
    static final String PAREN_PATTERN = "\\(|\\)";
    static final String BRACE_PATTERN = "\\{|\\}";
    static final String BRACKET_PATTERN = "\\[|\\]";
    static final String SEMICOLON_PATTERN = "\\;";
    static final String STRING_PATTERN = "\"([^\"\\\\]|\\\\.)*\"";
    static final String STR_PATTERN = "\'([^\'\\\\]|\\\\.)*\'";
    static final String COMMENT_PATTERN = "//[^\n]*" + "|" + "/\\*(.|\\R)*?\\*/";
    static final Pattern PATTERN = Pattern.compile(
            "(?<KEYWORD>" + KEYWORD_PATTERN + ")"
                    + "|(?<BPJSKEYWORD>" + BPJSKEYWORD_PATTERN + ")"
                    + "|(?<PAREN>" + PAREN_PATTERN + ")"
                    + "|(?<BRACE>" + BRACE_PATTERN + ")"
                    + "|(?<BRACKET>" + BRACKET_PATTERN + ")"
                    + "|(?<SEMICOLON>" + SEMICOLON_PATTERN + ")"
                    + "|(?<STRING>" + STRING_PATTERN + ")"
                    + "|(?<STR>" + STR_PATTERN + ")"
                    + "|(?<COMMENT>" + COMMENT_PATTERN + ")"
    );


    public static StyleSpans<Collection<String>> computeHighlighting(String text) {
        Matcher matcher = KeyWordsCodeArea.PATTERN.matcher(text);
        int lastKwEnd = 0;
        StyleSpansBuilder<Collection<String>> spansBuilder
                = new StyleSpansBuilder<>();
        while(matcher.find()) {
            String styleClass =
                    matcher.group("KEYWORD") != null ? "keyword" :
                            matcher.group("BPJSKEYWORD") != null ? "bpJS" :
                                    matcher.group("PAREN") != null ? "paren" :
                                            matcher.group("STR") != null ? "strng" :
                                            matcher.group("BRACE") != null ? "brace" :
                                                    matcher.group("BRACKET") != null ? "bracket" :
                                                            matcher.group("SEMICOLON") != null ? "semicolon" :
                                                                    matcher.group("STRING") != null ? "string" :
                                                                            matcher.group("COMMENT") != null ? "comment" :
                                                                                    null; /* never happens */ assert styleClass != null;
            spansBuilder.add(Collections.emptyList(), matcher.start() - lastKwEnd);
            spansBuilder.add(Collections.singleton(styleClass), matcher.end() - matcher.start());
            lastKwEnd = matcher.end();
        }
        spansBuilder.add(Collections.emptyList(), text.length() - lastKwEnd);
        return spansBuilder.create();
    }
}