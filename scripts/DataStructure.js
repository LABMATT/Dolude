class DataStructure {

    // On insital construction of datascrutcute objectm, create pagecount and pages ready for use.
    constructor()
    {
      this.pageCount = 0;
      this.pages = [];
    }
  
    // New page adds one to the number of pages currently active. Then crates a new page object and adds it to the page.
    newPage()
    {
      this.pageCount++;
      this.pages.push(new pageClass(this.pageCount));
      console.log("New pages in array are: " + this.pages.toString());
    }
  
    // Get the page from the number then get object and info.
    getpage(pageNum)
    {
      console.log("page number is equal to: " + this.pages[pageNum].number);
    }
}

class pageClass {
    constructor(number)
    {
      console.log("newpage Number is: " + number)
      this.number = number;
      this.pageName = "Page " + number;
    }

    changePageNumber(newpage)
    {
        this.number = number;
        this.pageName = "Page " + number;
    }
  }

  class layerClass {
      
    // Setup new layer with layer number, layer name and the cordiance for the drawing aspects.
      constructor(layer)
      {
          this.layerNumber = layer;
          this.layerName = "Layer-" + layer;
          this.x = [];
          this.y = [];
          this.z = [];

          
      }

      // Add the new vectors to that array.
      addvector()
      {

      }

      // Get the newly drawn vector and simply all the extra drawn bits into a smaller vector. This saves drawing time and makes a smoother line.
      refactorVector()
      {

      }
  }