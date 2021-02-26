class npui {
  constructor(canvasName)
  {
    this.canvasName = canvasName;
    this.nodeArray = []; // Array that all nodes are stored into.
    this.snd = 10; // Standard node distance.
    this.anchor;

  }


  // Sets a node as needing no perant and having no angel from other nodes, insted provides a lcoation on screen for that ancor node to be placed.
  setAnchor(anc, x, y)
  {

    this.anchor = anc;
    this.anchor.x = x;
    this.anchor.y = y;
  }

  newNode(obj) {
    
    this.nodeArray.push(obj);
  } 

  
  // get node <nodeID> gets that node from the node array. Returns node then use this to change settings of this node.
  getNode(id)
  {

    if(id == "anchor")
    {

      return this.anchor;
    } else
    {
    nodeArray.forEach(element => {
      if(element.nodeID == id)
      {

        return element;
      }
    });
  }
  }
  
  
  // Display canvas puts this all into action.
  // Gets the xy points of every element of the menu starting with anchor.
  // plots a line from the xy point to the next to make the tree.
  // re-covers over all xy points and draws the ui element.
  display(on)
  {
    var canvas = document.getElementById(this.canvasName);
    var cwidth = canvas.width;
    var cheight = canvas.height;
    var menuCenterX = cwidth / 2;
    var menuCenterY = cheight / 2;

    if(display == true)
    { 
     ctx.beginPath();

     ctx.lineWidth = size;
     ctx.strokeStyle = colour;

     var forceRefactor = false;

     // If the anchor is ment to be centred on any axis then set that up for the current canvs postion.
     if(this.anchor.x == "center" || this.anchor.y == "center")
     {
       if(this.anchor.x == "center")
       {
        this.anchor.x = menuCenterX;
       }
       if(this.anchor.y == "center")
       {
        this.anchor.y = menuCenterY;
       }


     }
     
     //ctx.lineTo(x, y);
      
      nodeArray.forEach(currentNode => {
        if(forceRefactor == true)
        {
          currentNode.refactorPerant(); //https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
        }

        ctx.moveTo(currentNode.x, currentNode.y); // Start the achor postion at where we set it, we will draw a line from here.
      });


      ctx.fillStyle = 'black';
      ctx.stroke();
      ctx.fill();
      ctx.closePath();

    } else
    {

    }
  }
}


// Nodes are made by users but creating the class and then adding it to the tree using newNode(<ThereCustomNode>);
class node {
  constructor(id, perant)
  {
    this.nodeID = id;         // The ID that can be used to refreance this node.
    this.perantID = perant;   // The ID of the node this node is attached to.
    this.angle = 0;           // Where stright to top of screen is 0 degreese. What angle from there does your node point off in?
    this.x;
    this.y;
    this.perantX;
    this.perantY;

    this.refactorPerant(); // Get XY of perant

    this.bottomtxt = "";      // Text displayed underneeth node.
    this.toptxt = "";         // Text displayed ontop of node.
    this.centertxt = "";      // Text displayed in the center of node.
    this.textcolour = "white";

    this.lineColour = "defualt";
    this.linesize = "default";

    this.size = 10;           // Node size, how thicc node is.
    this.colour = "orange";   // base colour of the node.
    this.outline = false;     // If node has an outline or not
    this.image = null;        // The image displayed on node.
    this.func = null;         // The function that will be exacuted when you click on this node.

    
  }

  // Gets the perants XY number 
  // Then works out where it should be using trig and sets its own postion to that.
  refactorPerant()
  {
    var pidxy = getNode(this.perantID); // Get the perants node.
    this.perantX = pidxy.x;
    this.perantY = pidxy.y;

    
  }

  // Sets the colour of the line going to the node.
  setLineColour(lc)
  {
    this.lineColour = lc;
  }

  // Sets the size of the line going to the node.
  setLineSize(ls)
  {
    this.linesize = ls
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