import { Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent implements OnInit{
  
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  ngOnInit(): void {
    this.title.setTitle("About Page - Angular");
    this.meta.updateTag({name: "title", content: this.title.getTitle()});
    this.meta.updateTag({name: "og:title", content: this.title.getTitle()});
    this.meta.updateTag({name: "description", content: "About page of this page"});
    this.meta.updateTag({name: "og:description", content: "About page of this page"});
  }
}
