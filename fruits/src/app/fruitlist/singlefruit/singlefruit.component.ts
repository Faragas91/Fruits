import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {
  @Input()fruit =     
  {
    name: "Apfel",
    img:"apple.png",
    description: "û?pfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiû?, dafû¥r aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. û?pfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle fû¥r uns - zum Beispiel fû¥r Vitamin C.",
    genus: "KernobstgewûÊchsen innerhalb der Familie der RosengewûÊchse",
    stars: 2.3,
    reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
  };

  inputData = "";

  @Output()fruitName = new EventEmitter<string>();

  sendInputData() {
    this.fruitName.emit(this.inputData);
    this.inputData = "";
  }
}
