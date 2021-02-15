class DataStructure {

    // On insital construction of datascrutcute objectm, create pagecount and pages ready for use.
    constructor()
    {
      this.dateCreated = "date";
      this.dateLastModified = "";
      this.pageCount = -1;
      this.pages = [];
    }
  
    // New page adds one to the number of pages currently active. Then crates a new page object and adds it to the page.
    newPage()
    {
      this.pageCount++;
      this.pages.push(new pageClass(this.pageCount));
      console.log("New pages in array are: " + this.pages[this.pageCount].number);
      return this.pages[this.pageCount];
    }
  
    // Get the page from the number then get object and info.
    getPage(pageNumber)
    {
      if(pageNumber > this.pages.length)
      {
        
        return this.newPage();
      } else{

        return this.pages[pageNumber];
      }
    }
}




// Stores the page and layers
class pageClass {
    constructor(number)
    {
      console.log("newpage Number is: " + number)
      this.number = number;
      this.pageName = "Page " + number;

      this.layerCount = -1;
      this.layers = [];
    }

    // Change the page number.
    changePageNumber(newpage)
    {
        this.number = number;
        this.pageName = "Page " + number;
    }

    // Adds layer to the array.
    newLayer()
    {
      this.layerCount++;
      this.layers.push(new layerClass(this.layerCount));
      console.log("New layer in array are: " + this.layers.toString());
    }

    getLayer(layerNumber)
    {
      if(layerNumber > this.layers.length)
      {
        console.log("no Layer foudn!")
        return this.newLayer();
      }
      else{

        console.log("layerFOund");
        return this.layers[layerNumber];
      } 
    }
  }

  class layerClass {
      
    // Setup new layer with layer number, layer name and the cordiance for the drawing aspects.
      constructor(layer)
      {
          this.layerNumber = layer;
          this.layerName = "Layer-" + layer;

          this.lx = 0;
          this.ly = 0;


          this.x = [];
          this.y = [];
          this.z = [];
          this.hexColour = []; // 0 = no colour, hex code = colour, 1 = previos colour


      }

      // Add the new vectors to that array.
      addVector(x, y, fresh)
      {

      }

      // The last x y cordinate form the mouse, If not a fresh line the draw line from this to new cordinat. If fresh then will be same as current.
      lastXY(x, y)
      {
        console.log("yourxy: " + x + " " + y + " in " + this.layerNumber);
        this.lx = x;
        this.ly = y;
      }

      getLX()
      {
        return this.lx;
      }

      getLY()
      {
        return this.ly;
      }


      // Get the newly drawn vector and simply all the extra drawn bits into a smaller vector. This saves drawing time and makes a smoother line.
      refactorVector()
      {

      }
  }