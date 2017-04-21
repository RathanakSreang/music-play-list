import _map from 'lodash/map';
import _split from 'lodash/split';
import _hasIn from 'lodash/hasIn';

// same as: const css_parse = function(styles, cssClasses){
export const css_parse = (styles, cssClasses) => {
  return _map(_split(cssClasses, ' '), function(v) {
    return _hasIn(styles, v) ? styles[v] : v
  }).join(' ')
}
