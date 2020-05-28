var model = {
    init: function () {
        var cats = [
            {
                name: "Amar",
                image: "//live.staticflickr.com/1126/625069434_c813129673_k.jpg",
                counter: 0,
            },
            {
                name: "Akbar",
                image: "//lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
                counter: 0,
            },
            {
                name: "Anthony",
                image: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
                counter: 0,
            },
        ];

        this.cats = cats;
        this.currentCat = this.cats[0];
    },
    currentCat: null,
    fetchCat: function (index) {
        return this.cats[index];
    },
    fetchCats: function () {
        return this.cats;
    },
    setCurrentCat: function(index) {
        this.currentCat = this.cats[index]
    },
    incrementCounter: function () {
        var cat = this.currentCat;
        cat.counter +=1;
        return cat;
    }
};

var octopus = {
    init: function () {
        model.init();
        listView.init();
        displayCat.init();

        var cats = model.fetchCats();
        listView.render(cats);
        displayCat.render(model.currentCat);
    },
    setCurrentCat: function(index) {
        model.setCurrentCat(index);
        displayCat.render(model.currentCat);
    },
    incrementCounter: function () {
        var cat = model.incrementCounter();
        if (cat) {
            displayCat.render(cat);
        }
    }
};

var listView = {
    init: function () {
        this.list = document.getElementById("list");
    },
    render: function (cats) {
        cats.forEach((cat, index) => {
            var elem = document.createElement('button');
            elem.textContent = cat.name;
            elem.addEventListener("click", (function(copy){
                return function() {
                    octopus.setCurrentCat(copy)
                }
            })(index));
            this.list.appendChild(elem);
        })
    }
};

var displayCat = {
    init: function () {
        // this.catContainer = $("#currentCat");
        this.name  = document.getElementById("name");
        this.catImage = document.getElementById("catImage");
        this.counter = document.getElementById("counter");

    },
    render: function (cat) {
        this.catImage.src = cat.image;
        this.name.textContent = cat.name;
        this.counter.textContent = cat.counter;
        this.catImage.addEventListener("click", octopus.incrementCounter);
    }

};

octopus.init();