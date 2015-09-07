// Eventos / comunicación con el servidor
var socket = io();

socket.on(DRAW_MAP, function(msg) {
	console.log(DRAW_MAP+' request: '+msg);
    addLayer(msg);
});

socket.emit(GET_MAP, '');