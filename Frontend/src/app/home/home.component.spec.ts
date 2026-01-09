import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';

describe('NewIdeaComponent', () => {
    // beforeEach(() => TestBed.configureTestingModule({
    //     imports: [
    //         HttpClientModule
    //     ],
    //     declarations: [HomeComponent]
    // }));
    beforeEach(() => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000; // Set timeout to 10 seconds (adjust as needed)
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            declarations: [HomeComponent]
        });
    });

    it('click new post should change the page', async () => {
        const fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        await fixture.whenStable(); // Wait for asynchronous tasks to complete
    
        const compiled = fixture.nativeElement as HTMLElement;
        const newIdeaButton = fixture.debugElement.nativeElement.querySelector('.New-Idea-Button');
    
        expect(newIdeaButton).toBeTruthy();
    
        newIdeaButton.click();
        fixture.detectChanges();
    
        const newPage = fixture.debugElement.nativeElement;
        const postIdeaButton = newPage.querySelector('.Post-Idea-Button');
    
        expect(postIdeaButton).toBeTruthy();
        expect(postIdeaButton.textContent).toContain('Post Idea');
    });
})