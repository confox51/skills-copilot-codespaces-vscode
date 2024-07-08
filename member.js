function skillsMember() {
    // Get the member's skills
    const memberSkills = this.skills;
    // Check if the member has any skills
    if (memberSkills.length > 0) {
        // Print out the member's skills
        console.log(`${this.name} has the following skills:`);
        for (const skill of memberSkills) {
            console.log(skill);
        }
    } else {
        console.log(`${this.name} has no skills listed.`);
    }
}