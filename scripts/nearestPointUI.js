class npui {
  constructor()
  {
    this.nodeArray = []; // Array that all nodes are stored into.
    this.snd = 10; // Standard node distance.
  }

  setAnchor()
  {

  }

  newNode(obj) {
    
    this.nodeArray.push(obj);
  } 

  
  // get node <nodeID> gets that node from the node array. Returns node then use this to change settings of this node.
  getNode(id)
  {
    nodeArray.forEach(element => {
      if(element.nodeID == id)
      {

        return element;
      }
    });
  }
  
  
}


// Nodes are made by users but creating the class and then adding it to the tree using newNode(<ThereCustomNode>);
class node {
  constructor(id, perant)
  {
    this.nodeID = id;         // The ID that can be used to refreance this node.
    this.perantID = perant;   // The ID of the node this node is attached to.
    this.angle = 0;           // Where stright to top of screen is 0 degreese. What angle from there does your node point off in?

    this.bottomtxt = "";      // Text displayed underneeth node.
    this.toptxt = "";         // Text displayed ontop of node.
    this.centertxt = "";      // Text displayed in the center of node.
    this.textcolour = "white";

    this.size = 10;           // Node size, how thicc node is.
    this.colour = "orange";   // base colour of the node.
    this.outline = false;     // If node has an outline or not
    this.image = null;        // The image displayed on node.
    this.func = null;         // The function that will be exacuted when you click on this node.

  }

  //text displayed at postion stated.
  text(text, postion)
  {
    switch(postion)
    {
      case "top":

        this.toptxt = text; 
      break;
      case "bottom":

        this.bottomtxt = text;
      break;

      case "center":

        this.centertxt = text;
      break;

      default:
        this.bottomtxt = text;
        break;
    }
  }

  // The colour of displayed text.
  textcolour(colour)
  {
    this.textcolour = colour;
  }

  // Size of the node.
  size(nodeSize)
  {
    this.size = nodeSize;
  }

  // Colour of the node
  colour(colour)
  {
    this.colour = colour;
  }

  // If node has outline.
  outline(outline)
  {
    this.outline = outline;
  }

  // The image displayed on the node.
  image(img)
  {
    this.image = img;
  }

  // The function that is called when the node is clicked.
  action(func)
  {
    this.func = func;
  }
}