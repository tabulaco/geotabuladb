/**
 * Created by vargax on 2/09/15.
 */
var DRAW_MAP = 'draw_map';
var GET_MAP = 'get_map';

try {
    module.exports.DRAW_MAP = DRAW_MAP;
    module.exports.GET_MAP = GET_MAP;
    console.log('We are running on the server...')
} catch(err) {
    console.log('We are running on the browser...')
}