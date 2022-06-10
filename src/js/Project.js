export class Project {
  constructor({id, title, taskName, imgSrc, imgAlt, link, stack, taskItems}) {
    this.id = id;
    this.title = title;
    this.taskName = taskName;
    this.imgSrc = imgSrc;
    this.imgAlt = imgAlt;
    this.link = link;    
    this.stack = stack;
    this.taskItems = taskItems;
  }

  // Project generator

  generateProject() {
    let template = "";
    let project = document.createElement("div");
    project.className = "project__item";
    project.setAttribute("project-id", this.id);

    template += `
    <figure class="project__item_figure">
      <img class="project__item_figure-img" src="./assets/images/projects/${this.imgSrc}" alt="${this.imgAlt}">
        <figcaption class="project__item_figure-caption">
          <h4>${this.taskName}</h4>
          <ul class="figure__caption">`;
      
        this.taskItems.map(taskItem => {
          template += `<li><span class="figure__caption_icon item-icon"></span>${taskItem}</li>`;
        });

        template += `
        </ul>
      </figcaption>
    </figure>
    <div class="project__item_info">
    <a href="${this.link}" target="_blank">
      <h3 class="project__title">${this.title}</h3>
    </a>  
    <div class="project__item_info-stack">`;

    this.stack.map(stackItem => {
      template += `<img src="./assets/icons/stack-icon-${stackItem}.svg" alt="${stackItem}" title="${stackItem}">`;
    });     

      template += `
      </div>
    </div>`;

  project.innerHTML = template;
  return project;
  }
}