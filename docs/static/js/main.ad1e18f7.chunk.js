(this["webpackJsonpempty-project"]=this["webpackJsonpempty-project"]||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"bulbasaur","types":["poison","grass"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"},{"id":2,"name":"ivysaur","types":["poison","grass"],"evolution":"bulbasaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"},{"id":3,"name":"venusaur","types":["poison","grass"],"evolution":"ivysaur","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"},{"id":4,"name":"charmander","types":["fire"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},{"id":5,"name":"charmeleon","types":["fire"],"evolution":"charmander","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"},{"id":6,"name":"charizard","types":["flying","fire"],"evolution":"charmeleon","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"},{"id":7,"name":"squirtle","types":["water"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"},{"id":8,"name":"wartortle","types":["water"],"evolution":"squirtle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"},{"id":9,"name":"blastoise","types":["water"],"evolution":"wartortle","url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"},{"id":10,"name":"caterpie","types":["bug"],"evolution":null,"url":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"}]')},function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),o=(n(15),n(6)),l=n(2),p=n(3),c=n(1),u=n(5),h=n(4),m=(n(16),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).favHandlerChild=a.favHandlerChild.bind(Object(c.a)(a)),a}return Object(p.a)(n,[{key:"favHandlerChild",value:function(e){this.props.favHandler(e.currentTarget.id)}},{key:"render",value:function(){var e=this.props.types.map((function(e,t){return s.a.createElement("li",{key:t},e)}));return s.a.createElement("li",{className:"App__container__pokemon ".concat(this.props.favPokemons.includes(this.props.id.toString())?"fav":""),onClick:this.favHandlerChild,id:this.props.id},s.a.createElement("h2",{className:"App__container__pokemon__name"},this.props.name),s.a.createElement("img",{src:this.props.url,alt:this.props.name}),s.a.createElement("p",{className:"App__container__pokemon__evolution__title"},"Evolution:"),s.a.createElement("p",{className:"App__container__pokemon__evolution__pokemons"},null===this.props.evolution?"First evolution":this.props.evolution),s.a.createElement("div",{className:"App__container__pokemon__types"},s.a.createElement("p",{className:"App__container__pokemon__types__title"},"Types:"),s.a.createElement("ul",{className:"App__container__pokemon__types__content"},e)))}}]),n}(s.a.Component));m.defaultProps={evolution:"No data"};var d=m,y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props.pokemons.map((function(t){return s.a.createElement(d,{key:t.id,id:t.id,name:t.name,types:t.types,url:t.url,evolution:t.evolution,favHandler:e.props.favHandler,favPokemons:e.props.favPokemons})}));return s.a.createElement("ul",{className:"App__container"},t)}}]),n}(s.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return s.a.createElement("header",{className:"header"},s.a.createElement("h1",{className:"App__title"},"Pokedex"))}}]),n}(s.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).searchHandlerChild=a.searchHandlerChild.bind(Object(c.a)(a)),a.isTypeHandlerChild=a.isTypeHandlerChild.bind(Object(c.a)(a)),a}return Object(p.a)(n,[{key:"searchHandlerChild",value:function(e){this.props.searchHandler(e)}},{key:"isTypeHandlerChild",value:function(e){this.props.isTypeHandler({key:e.target.name,value:e.target.checked})}},{key:"render",value:function(){return s.a.createElement("form",null,s.a.createElement("label",{htmlFor:"search"},"Search for a pokemon "),s.a.createElement("input",{type:"text",id:"search",placeholder:"Search your pokemon",onChange:this.searchHandlerChild}),s.a.createElement("span",null," Filter by type: "),s.a.createElement("label",{htmlFor:"type-filter"},s.a.createElement("input",{type:"checkbox",id:"type-fire",name:"isType",checked:this.props.isType,onChange:this.isTypeHandlerChild}),"Fire"),s.a.createElement("label",{htmlFor:"type-water-filter"},s.a.createElement("input",{type:"checkbox",id:"type-water",name:"isTypeWater",checked:this.props.isTypeWater,onChange:this.isTypeHandlerChild}),"Water"),s.a.createElement("label",{htmlFor:"type-grass-filter"},s.a.createElement("input",{type:"checkbox",id:"type-grass",name:"isTypeGrass",checked:this.props.isTypeGrass,onChange:this.isTypeHandlerChild}),"Grass"),s.a.createElement("label",{htmlFor:"type-Flying-filter"},s.a.createElement("input",{type:"checkbox",id:"type-Flying",name:"isTypeFlying",checked:this.props.isTypeFlying,onChange:this.isTypeHandlerChild}),"Flying"),s.a.createElement("label",{htmlFor:"type-Bug-filter"},s.a.createElement("input",{type:"checkbox",id:"type-Bug",name:"isTypeBug",checked:this.props.isTypeBug,onChange:this.isTypeHandlerChild}),"Bug"),s.a.createElement("label",{htmlFor:"type-Rock-filter"},s.a.createElement("input",{type:"checkbox",id:"type-Rock",name:"isTypeRock",checked:this.props.isTypeRock,onChange:this.isTypeHandlerChild}),"Rock"),s.a.createElement("label",{htmlFor:"type-Electric-filter"},s.a.createElement("input",{type:"checkbox",id:"type-Electric",name:"isTypeElectric",checked:this.props.isTypeElectric,onChange:this.isTypeHandlerChild}),"Electric"),s.a.createElement("label",{htmlFor:"type-Confusion-filter"},s.a.createElement("input",{type:"checkbox",id:"type-Confusion",name:"isTypeConfusion",checked:this.props.isTypeConfusion,onChange:this.isTypeHandlerChild}),"Confusion"),s.a.createElement("label",{htmlFor:"type-Poison-filter"},s.a.createElement("input",{type:"checkbox",id:"type-Poison",name:"isTypePoison",checked:this.props.isTypePoison,onChange:this.isTypeHandlerChild}),"Poison"))}}]),n}(a.Component),v=n(9),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={pokemons:v,favPokemons:[],searchText:"",isType:!1,isTypeWater:!1},a.favHandler=a.favHandler.bind(Object(c.a)(a)),a.searchHandler=a.searchHandler.bind(Object(c.a)(a)),a.isTypeHandler=a.isTypeHandler.bind(Object(c.a)(a)),a}return Object(p.a)(n,[{key:"favHandler",value:function(e){var t=this.state.favPokemons;if(t.includes(e)){var n=e,a=t.filter((function(e){return e!==n}));this.setState({favPokemons:a})}else t.push(e),this.setState({favPokemons:t});localStorage.setItem("favPokemons",JSON.stringify(this.state.favPokemons))}},{key:"searchHandler",value:function(e){var t=e.currentTarget.value.toLowerCase();this.setState({searchText:t})}},{key:"isTypeHandler",value:function(e){this.setState(Object(o.a)({},e.key,e.value))}},{key:"componentDidMount",value:function(){for(var e in this.state)if(localStorage.hasOwnProperty(e)){var t=localStorage.getItem(e);t=JSON.parse(t),this.setState(Object(o.a)({},e,t))}}},{key:"render",value:function(){var e=this;console.log(this.state);var t=this.state.pokemons.filter((function(t){return e.state.favPokemons.includes(t.id+"")})),n=this.state.searchText,a=this.state.pokemons,r=this.state.pokemons.filter((function(e){return!!e.name.toLowerCase().includes(n)||(!(!n.includes("fi")||!e.types.includes("fire"))||(!(!n.includes("w")||!e.types.includes("water"))||(!(!n.includes("b")||!e.types.includes("bug"))||(!(!n.includes("grass")||!e.types.includes("grass"))||(!(!n.includes("f")||!e.types.includes("flying"))||(!(!n.includes("po")||!e.types.includes("poison"))||!(!n.includes("r")||!e.types.includes("rock"))))))))})).filter((function(t){return!0!==e.state.isType||t.types.includes("fire")})).filter((function(t){return!0!==e.state.isTypeWater||t.types.includes("water")})).filter((function(t){return!0!==e.state.isTypePoison||t.types.includes("poison")})).filter((function(t){return!0!==e.state.isTypeGrass||t.types.includes("grass")})).filter((function(t){return!0!==e.state.isTypeFlying||t.types.includes("flying")})).filter((function(t){return!0!==e.state.isTypeBug||t.types.includes("bug")})).filter((function(t){return!0!==e.state.isTypeRock||t.types.includes("rock")})).filter((function(t){return!0!==e.state.isTypeElectric||t.types.includes("electric")})).filter((function(t){return!0!==e.state.isTypeConfusion||t.types.includes("confusion")}));return s.a.createElement("div",{className:"App"},s.a.createElement(f,null),s.a.createElement(k,{searchHandler:this.searchHandler,isType:this.state.isType,isTypeWater:this.state.isTypeWater,isTypeHandler:this.isTypeHandler}),s.a.createElement(y,{pokemons:r||a,favPokemons:this.state.favPokemons,favHandler:this.favHandler}),s.a.createElement("h2",null,"Favoritos"),s.a.createElement(y,{className:"pokemon-favs",pokemons:t,favPokemons:this.state.favPokemons,favHandler:this.favHandler}))}}]),n}(s.a.Component);i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.ad1e18f7.chunk.js.map