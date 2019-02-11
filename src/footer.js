import React, { Component } from 'react';

import './Css/footer.css';

class Footer extends Component {

constructor(){
super();

this.state = {
	author : "Created by Clare Kirabo 2019",
	github : "Github : https://github.com/ckirabo",
	madeIn : "Made In React",
	githubLink: "https://github.com/ckirabo"
}

}


render(){

	return(

<div>
<footer id="footer">
<div className="row">
<ul>
<li>{this.state.author}</li>
<li>{this.state.github}</li>
<li>{this.state.madeIn}</li>
</ul>
</div>
</footer>

</div>

		);
}

}

export default Footer;