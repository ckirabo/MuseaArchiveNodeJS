import React, { Component } from 'react';


class CreateCards extends Component {


render(){


let output = this.props.museums.map(
	(museums) => 
	{
if((museums.link.indexOf("www") === 0) || ( !museums.link.indexOf("http") === 0) ){
               let museumLink = museums.link;
               museumLink = "http://" + museums.link;
		
      return(
			<div key={museums.id} className="cards">
			<h2>{museums.name}</h2>
			<ul>
			<li>{museums.address1}</li>
			<li>{museums.postcode}</li>
			<li>{museums.admission}</li>
			<li>{museums.contactNo}</li>
			<li>{museums.contactEmail}</li>



			<li><a href={museumLink}>{museumLink}</a></li>
			</ul>
			</div>
			);
  }

  else{

           return(
			<div key={museums.id} className="cards">
			<h2>{museums.name}</h2>
			<ul>
			<li>{museums.address1}</li>
			<li>{museums.postcode}</li>
			<li>{museums.admission}</li>
			<li>{museums.contactNo}</li>
			<li>{museums.contactEmail}</li>


			<li><a href={museums.link}>{museums.link}</a></li>
			</ul>
			</div>
			);

		}

	      

		}
	
	);


	return(

		<div className="locationForCards">
         {output}
		</div>

		);
}

}

export default CreateCards;