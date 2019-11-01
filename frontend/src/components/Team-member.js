import React, {Component} from 'react';

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class Teammember extends Component{
    // constructor(props){
    //   super(props);
    // }
  
  
    render (){
      return (
      <div>

          <Card >
          <CardMedia style={{height: 0, paddingTop: '5%'}}
                    title={this.props.name}>
            
            </CardMedia>
            <CardContent>
              <img alt="Profile" src={this.props.imgURL} width = "190" height = "140"/>
              <Typography gutterBottom variant="headline" component="h2">
                Name: {this.props.name}
              </Typography>
              <Typography gutterBottom variant="headline" component="h2">
                Role: {this.props.role}
              </Typography>
              <Typography gutterBottom variant="headline" component="h2">
                Bio: 
              </Typography>
              <Typography component="p">
              <p>{this.props.bio}</p>
              </Typography>
              
            </CardContent>

          </Card>
          


        
      </div>
      );
    }

    
}

function getFirstName(name){
  const firstName = name.split(" "); 
  if(firstName.length <= 1){
    return "Invalid Name"; 
  }
  return firstName[0]; 
}

function validateRole(role){
  if(role !== "Admin" && role !== "Editor"){
    return "Invalid Role"; 
  }
  return role; 
}

function trimBio(bio){
  if(bio.length > 100){
    bio = bio.slice(0,100); 
  }
  return bio.length; 
}


function checkAuthority(role, action){
  if(role === "Admin"){
    return true; 
  }
  else{
    if (action === "Add Editor" || action === "Delete Editor"){
      return false; 
    }
    else{
      return true; 
    }
  }
}

function randomNumber(){
  return Math.floor((Math.random()+1)*1000).toString(); 
}

function generateUserID(name){
  if(name.length < 2){
    return "******"
  }
  var letters = name.slice(0, 2); 
  var num = randomNumber(); 
  return letters.concat(num); 
}

function filterBadWords(bio){
  bio = bio.replace("fuck", "****");
  return bio;  
}

function generateInfoArray(name, role){
  var info = name.split(" "); 
  if(role === "Admin" || role === "Editor"){
    info.push(role); 
  }
  else{
    info.push("Invalid")
  }
  return info;  
}

function makeRolesBinary(role){
  if(role === "Admin"){
    return 1; 
  }
  else if(role === "Editor"){
    return 0; 
  }
  else{
    return NaN; 
  }
}


Teammember.defaultProps = {
  name: "Anonumous User", 
  role: "Classified Role", 
  bio: "A very private person. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia odio quis magna dictum sodales. Sed ac nibh orci. In eu libero ornare, iaculis nunc id, mattis orci. Etiam nibh eros, ornare sit amet massa ac, facilisis scelerisque elit. Aliquam venenatis porta neque, eget egestas elit iaculis quis. Etiam augue tortor, ultrices a porta et, ornare non lacus. Etiam vehicula bibendum blandit. Etiam ac erat vitae mauris rutrum iaculis. Mauris vehicula eget lectus vitae efficitur. Nulla ornare vitae est et tincidunt.Phasellus id mauris nibh. Pellentesque vitae nunc massa. Etiam tincidunt mattis ultricies. Etiam suscipit lacus augue, ut pellentesque nisl dapibus et. Nam ullamcorper orci id hendrerit ultrices. Mauris semper est nec ipsum bibendum, rhoncus ultrices velit bibendum. Donec at lobortis magna. Mauris at nibh nibh. Cras sit amet tempor est. Sed euismod id nunc non consequat. Proin blandit ipsum metus, nec fermentum leo luctus sit amet. Nulla ligula purus, rhoncus eu libero ut, pharetra posuere elit. Aenean vel mollis arcu. Ut nec lacinia metus. Praesent volutpat mattis tellus sit amet scelerisque.Phasellus at scelerisque mi, id ultricies purus. Maecenas in mollis leo. Etiam massa dui, ultrices vitae mattis sed, sagittis blandit libero. Phasellus bibendum mauris id ex egestas, eget iaculis justo lobortis. Aliquam iaculis eros eu leo mollis, sit amet lacinia lacus mollis. Pellentesque sit amet egestas odio, eu cursus sapien. Cras eu velit quam. Donec ac nibh vel nisl mattis malesuada. Duis vel dapibus nisl, luctus varius magna. In porttitor elit purus, eu porta nulla suscipit ut. Sed elementum libero eu arcu blandit, ac bibendum lacus vestibulum.", 
  imgURL: "ASSETS/default_profile.png"
  //imgURL: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80"

  
}






export {getFirstName, validateRole, trimBio, checkAuthority, generateUserID, filterBadWords, generateInfoArray, randomNumber, makeRolesBinary}; 

export default Teammember;
