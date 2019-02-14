import React, { Component } from 'react';


class CreateCards extends Component {


render(){


let output = this.props.museums.map(
	(museum) => 
	{
if((museum.link.indexOf("http://") === 0) ||(museum.link.indexOf("https://") === 0) ){
        
           return(
			<div key={museum.id} className="cards">
			<h2>{museum.name}</h2>
			<ul>
			<li>{museum.address1}</li>
			<li>{museum.postcode}</li>
			<li>{museum.admission}</li>
			<li>{museum.contactNo}</li>
			<li>{museum.contactEmail}</li>


			<li><a href={museum.link}>{museum.link}</a></li>
			</ul>
			</div>
			);
  }

  else{


   let museumLink = museum.link;
               museumLink = "http://" + museum.link;
		
      return(
			<div key={museum.id} className="cards">
			<h2>{museum.name}</h2>
			<ul>
			<li>{museum.address1}</li>
			<li>{museum.postcode}</li>
			<li>{museum.admission}</li>
			<li>{museum.contactNo}</li>
			<li>{museum.contactEmail}</li>



			<li><a href={museumLink}>{museumLink}</a></li>
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