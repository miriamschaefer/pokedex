(this["webpackJsonpempty-project"]=this["webpackJsonpempty-project"]||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),s=n(6),a=n.n(s),p=(n(13),n(1)),i=n(2),u=n(4),c=n(3),l=(n(14),function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.types.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("li",{className:"App__container__pokemon"},r.a.createElement("h2",{className:"App__container__pokemon__name"},this.props.name),r.a.createElement("img",{src:this.props.url,alt:this.props.name}),r.a.createElement("p",{className:"App__container__pokemon__evolution__title"},"Evolution:"),r.a.createElement("p",{className:"App__container__pokemon__evolution__pokemons"},null===this.props.evolution?"Primera evoluci\xf3n":this.props.evolution),r.a.createElement("div",{className:"App__container__pokemon__types"},r.a.createElement("p",{className:"App__container__pokemon__types__title"},"Types:"),r.a.createElement("ul",{className:"App__container__pokemon__types__content"},e)))}}]),n}(r.a.Component));l.defaultProps={evolution:"No evoluciona"};var m=l,_=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.pokemons.map((function(e,t){return r.a.createElement(m,{key:t,id:e.id,name:e.name,types:e.types,url:e.url,evolution:e.evolution})}));return r.a.createElement("ul",{className:"App__container"},e)}}]),n}(r.a.Component),h=n(7),k=function(e){Object(u.a)(n,e);var t=Object(c.a)(n);function n(e){var o;return Object(p.a)(this,n),(o=t.call(this,e)).state={pokemons:h},o}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App__title"},"Pokedex"),r.a.createElement(_,{pokemons:this.state.pokemons}))}}]),n}(r.a.Component);a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.77b18a39.chunk.js.map