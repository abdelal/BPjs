/* global bp */
/**
 * Simple "Hello world" program.
 */

bp.registerBThread( "helloBT", function(){
    bsync( {request:bp.Event("Hello,")} );
} );

bp.registerBThread( "worldBT", function(){
    bsync( {request:bp.Event("World!")} );
} );

bp.registerBThread( "arbiter", function(){
    while(true) {
        bsync({
            waitFor: bp.Event("Hello") });
        bsync({request:bp.Event("a new event made by me")});
    }
} );
bp.registerBThread( "neweventtype", function(){
    while(true){
    bsync( {waitFor:bp.Event("Hello4")});
    bsync({request:bp.Event("a new event made by me")});
} });