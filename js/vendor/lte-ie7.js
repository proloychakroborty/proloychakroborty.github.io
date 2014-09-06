/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'social-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'socialicon-tumblr' : '&#x21;',
			'socialicon-linkedin' : '&#x22;',
			'socialicon-twitter' : '&#x23;',
			'socialicon-facebook' : '&#x24;',
			'socialicon-pinterest' : '&#x25;',
			'socialicon-blogger' : '&#x26;',
			'socialicon-youtube' : '&#x27;',
			'socialicon-vimeo' : '&#x28;',
			'socialicon-google-plus' : '&#x29;',
			'socialicon-flickr' : '&#x2a;',
			'socialicon-briefcase' : '&#x2b;',
			'socialicon-address-book' : '&#x2c;',
			'socialicon-profile' : '&#x2d;',
			'socialicon-html5' : '&#x2e;',
			'socialicon-css3' : '&#x2f;',
			'socialicon-box-add' : '&#x30;',
			'socialicon-mobile' : '&#x31;',
			'socialicon-mail' : '&#x32;',
			'socialicon-skype' : '&#x33;',
			'socialicon-location' : '&#x34;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/socialicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};