import React, { Component } from 'react';


class Searchbar extends Component {


	render(){
 

	return (


           <div >		

	         <div className="searchWidget">
           <input type="text" placeholder="Search.." id="searchBoxId"  onChange={this.props.fitlerHandler}/>
           <input type="button" value="Go!" id="searchGo" onClick={this.props.fitlerHandler} />
           </div>

  
           </div>
          

	);




}

}

export default Searchbar;