webpackJsonp([21],{271:function(e,t,l){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=l(0),u=l.n(c),m=l(5),o=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),E=function(e){function t(e){a(this,t);var l=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.toggle=l.toggle.bind(l),l.state={dropdownOpen:new Array(2).fill(!1)},l}return r(t,e),o(t,[{key:"toggle",value:function(e){var t=this.state.dropdownOpen.map(function(t,l){return l===e&&!t});this.setState({dropdownOpen:t})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(m._6,null,u.a.createElement(m.t,{md:"6"},u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Button Group"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/button-group/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(m.j,null,u.a.createElement(m.g,null,u.a.createElement(m.e,null,"Left"),u.a.createElement(m.e,null,"Middle"),u.a.createElement(m.e,null,"Right")))),u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Vertical variation")),u.a.createElement(m.j,null,u.a.createElement(m.g,{vertical:!0},u.a.createElement(m.e,null,"1"),u.a.createElement(m.e,null,"2"),u.a.createElement(m.f,{isOpen:this.state.dropdownOpen[1],toggle:function(){e.toggle(1)}},u.a.createElement(m.z,{caret:!0},"Dropdown"),u.a.createElement(m.y,null,u.a.createElement(m.x,null,"Dropdown Link"),u.a.createElement(m.x,null,"Dropdown Link")))))),u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Button Toolbar")),u.a.createElement(m.j,null,u.a.createElement(m.h,null,u.a.createElement(m.g,{className:"mr-2"},u.a.createElement(m.e,null,"1"),u.a.createElement(m.e,null,"2"),u.a.createElement(m.e,null,"3"),u.a.createElement(m.e,null,"4")),u.a.createElement(m.g,{className:"mr-2"},u.a.createElement(m.e,null,"5"),u.a.createElement(m.e,null,"6"),u.a.createElement(m.e,null,"7")),u.a.createElement(m.g,null,u.a.createElement(m.e,null,"8")))))),u.a.createElement(m.t,{md:6},u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Sizing")),u.a.createElement(m.j,null,u.a.createElement(m.g,{size:"lg"},u.a.createElement(m.e,null,"Left"),u.a.createElement(m.e,null,"Middle"),u.a.createElement(m.e,null,"Right")),u.a.createElement("hr",null),u.a.createElement(m.g,null,u.a.createElement(m.e,null,"Left"),u.a.createElement(m.e,null,"Middle"),u.a.createElement(m.e,null,"Right")),u.a.createElement("hr",null),u.a.createElement(m.g,{size:"sm"},u.a.createElement(m.e,null,"Left"),u.a.createElement(m.e,null,"Middle"),u.a.createElement(m.e,null,"Right")))),u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Nesting")),u.a.createElement(m.j,null,u.a.createElement(m.g,null,u.a.createElement(m.e,null,"1"),u.a.createElement(m.e,null,"2"),u.a.createElement(m.f,{isOpen:this.state.dropdownOpen[0],toggle:function(){e.toggle(0)}},u.a.createElement(m.z,{caret:!0},"Dropdown"),u.a.createElement(m.y,null,u.a.createElement(m.x,null,"Dropdown Link"),u.a.createElement(m.x,null,"Dropdown Link")))))))),u.a.createElement(m._6,null,u.a.createElement(m.t,null,u.a.createElement(m.i,null,u.a.createElement(m.n,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Button Toolbar")," ",u.a.createElement("small",null,"with input groups")),u.a.createElement(m.j,null,u.a.createElement(m.h,{className:"mb-3"},u.a.createElement(m.g,{className:"mr-2"},u.a.createElement(m.e,null,"1"),u.a.createElement(m.e,null,"2"),u.a.createElement(m.e,null,"3"),u.a.createElement(m.e,null,"4")),u.a.createElement(m.G,null,u.a.createElement(m.H,{addonType:"prepend"},u.a.createElement(m.I,null,"@")),u.a.createElement(m.F,{placeholder:"Input group example"}))),u.a.createElement(m.h,{className:"justify-content-between"},u.a.createElement(m.g,null,u.a.createElement(m.e,null,"1"),u.a.createElement(m.e,null,"2"),u.a.createElement(m.e,null,"3"),u.a.createElement(m.e,null,"4")),u.a.createElement(m.G,null,u.a.createElement(m.H,{addonType:"prepend"},u.a.createElement(m.I,null,"@")),u.a.createElement(m.F,{placeholder:"Input group example"}))))))))}}]),t}(c.Component);t.default=E}});
//# sourceMappingURL=21.fe1380c5.chunk.js.map