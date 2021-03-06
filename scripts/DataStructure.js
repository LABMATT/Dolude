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
      if(pageNumber > this.pages.length || pageNumber == this.pages.length)
      {
        console.log("no page found, amking a new one");
        return this.newPage();
      } else{

        return this.pages[pageNumber];
      }
    }



    // Returns how many pages are currently active.
    getNumberPages()
    {
      return this.pages.length;
    }
}




// Stores the page and layers
class pageClass {
    constructor(number)
    {
      console.log("newpage Number is: " + number)
      this.number = number;
      this.pageName = "Page-" + number;
      this.pageColour = "white";

      this.layerCount = -1;
      this.layers = [];
    }

    changePageColour(colour)
    {
      this.pageColour = colour;
    }

    pageData()
    {
      var pageData = {
        "pageNumber":this.number,
        "pageName": this.pageName
      }

      return pageData;
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
      this.layers.push(new layerClass(this.layerCount, this.number));
      console.log("New layer in array are: " + this.layers.toString());
      return this.layers[this.layerCount];
    }

    // Gets a layer by that number, one one does not exist, creates new page.
    getLayer(layerNumber)
    {
      if(layerNumber > this.layers.length || layerNumber == this.layers.length)
      {
        console.log("no Layer foudn!")
        return this.newLayer();
      }
      else{

        return this.layers[layerNumber];
      } 
    }


    getLayerNumbers()
    {
      return this.layers.length;
    }
  }

  class layerClass {
      
    // Setup new layer with layer number, layer name and the cordiance for the drawing aspects.
      constructor(layer, page)
      {
          this.layerNumber = layer;
          this.layerName = "Layer-" + layer;
          this.perentPage = page;

          this.strokeArray = [];


      }

      

      // Create new stroke in the array.
      newStroke(colour, size)
      {
        this.strokeArray.push(new userStroke(colour, size));
      }



      setStroke(x, y)
      {

        this.strokeArray[this.strokeArray.length - 1].setNode(x, y);
      }

      getLatestStroke()
      {

        return this.strokeArray[this.strokeArray.length - 1];       
      }

      getStrokes()
      {
        return this.strokeArray;
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


// Each stroke 
  class userStroke
  {
    constructor(clr, sz)
    {
      console.log("colour is: " + colour);
      this.colour = clr;
      this.xvec = [];
      this.yvec = [];
      this.lsize = sz;
    }

    setNode(x, y)
    {
      this.xvec.push(x);
      this.yvec.push(y);
    }


    getLX()
    {
      return this.xvec[this.xvec.length - 1];
    }

    getLY()
    {
      return this.yvec[this.yvec.length - 1];
    }
    
  }