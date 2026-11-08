const character = {
    name: 'Snortleblat',
    class: 'Swamp Beast Diplomat',
    level: 5,
    health: 100,
    image: 'img/snortleblat.webp',

    attacked: function () {
        if(this.health <= 0){
            alert(`${this.name} is dead`);
            return;
        }
        this.health -= 20;

        if (this.health <= 0){
            this.health = 0;
            renderCharacter();
            setTimeout(() => alert(`${this.name} has died!`), 50);
        } else {
            renderCharacter();
        }
    },
    levelUp: function () {
        this.level += 1;
        renderCharacter();
    }
};

function renderCharacter() {
    document.querySelector('#charImage').src = character.image;
    document.querySelector('#charImage').alt = character.name;
    document.querySelector('#charName').textContent = character.name;
    document.querySelector('#charClass').textContent = character.class;
    document.querySelector('#charLevel').textContent = character.level;
    document.querySelector('#charHealth').textContent = character.health;
}

document.querySelector('#attackBtn').addEventListener('click', () => character.attacked());
document.querySelector('#levelBtn').addEventListener('click', () => character.levelUp());

renderCharacter();
