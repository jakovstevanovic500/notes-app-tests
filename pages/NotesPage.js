export class NotesPage {
    constructor(page) {
        this.page = page;        
        this.addNoteButton = page.getByTestId('add-new-note');
        this.noteTitleInput = page.getByTestId('note-title');
        this.noteDescriptionInput = page.getByTestId('note-description');
        this.submitButton = page.getByTestId('note-submit');
        this.deleteButton = page.getByTestId('note-delete');
        this.deleteButtonConfirm = page.getByTestId('note-delete-confirm');
    }

    async addNote(title, description) {
        await this.addNoteButton.click();
        await this.noteTitleInput.fill(title);
        await this.noteDescriptionInput.fill(description);
        await this.submitButton.click();
    }

    async deleteNote() {
        await this.deleteButton.first().click();
        await this.deleteButtonConfirm.click();
}
}
        