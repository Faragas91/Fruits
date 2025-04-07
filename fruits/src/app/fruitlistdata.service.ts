import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitlistdataService {

  constructor() { }

  fruitlist = [
    {
      name: "Apfel",
      img:"apple.png",
      description: "û?pfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiû?, dafû¥r aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. û?pfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle fû¥r uns - zum Beispiel fû¥r Vitamin C.",
      genus: "KernobstgewûÊchsen innerhalb der Familie der RosengewûÊchse",
      stars: 2.3,
      reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
    },
    {
      name: "Banane",
      img:"banana.png",
      description: "Bananen kûÑnnen bis zu 30 Zentimeter lang werden. Im reifen Zustand ist die Schale dick und gelb und lûÊsst sich leicht abziehen. Das cremige bis gelbe Fruchtfleisch ist zunûÊchst fest und stûÊrkehaltig.",
      genus: "BananengewûÊchse (Musaceae) innerhalb der EinkeimblûÊttrigen Pflanzen (Monokotyledonen)",
      stars: 3.8,
      reviews:[{name: "Waldemar W.", text: "gut fû¥r Obstsalat"},{name: "Olaf P.", text: "Kann man mal machen"}],
    },
    {
      name: "Sauerkirsche",
      img:"cherry.png",
      description: "Die Steinfrucht der Sauerkirsche hat einen Durchmesser von 15 bis 20 mm, ist etwa kugelfûÑrmig, etwas hûÑher, breiter, unbehaart, frostfrei, hell- bis dunkelrot. Das Fruchtfleisch ist sauer und rot oder farblos.",
      genus: "Pflanzenart aus der Familie der RosengewûÊchse (Rosaceae)",
      stars: 3.7,
      reviews:[{name: "Horst", text: "definitiv nicht sû¥û?"}],
    },
    {
      name: "Erdbeere",
      img:"strawberry.png",
      description: "Aus Erdbeeren lûÊsst sich beispielsweise Marmelade herstellen. Die Pflege von Pflanzen ist etwas mû¥hsam, aber es lohnt sich. Erdbeeren aus dem eigenen Garten schmecken in vielen FûÊllen besser als Obst aus dem Supermarkt",
      genus: "Pflanzenart aus der Familie der RosengewûÊchse (Rosaceae)",
      stars: 4.3,
      reviews:[{name: "Mandy K.", text: "perfekt fû¥r Kuchen"},{name: "Olaf P.", text: "Kann man auch mal machen"}],
    },
    {
      name: "Zitrone",
      img:"lemon.png",
      description: "Der immergrû¥ne Baum bringt lûÊngliche, ovale Frû¥chte (Zitronen) mit gelber oder gelbgrû¥ner Schale hervor. Das saftige, sûÊuerliche Fruchtfleisch enthûÊlt etwa 3,5ã??8 % ZitronensûÊure und erhebliche Mengen an Vitamin C.",
      genus: "Pflanzenart aus der Familie der  RautengewûÊchse",
      stars: 1.3,
      reviews:[{name: "Horst", text: "auch definitiv nicht sû¥û?"},{name: "Paul K.", text: "nicht perfekt fû¥r Kuchen"}],
    },
    {
      name: "Orange",
      img:"orange.png",
      description: "Das Innere der Orangenschale ist weiû? und kann nicht gegessen werden. Es muss vor dem Verzehr abgeschûÊlt werden. Orangen kûÑnnen zu verschiedenen Produkten verarbeitet werden. Ihre gepressten SûÊfte werden als Orangensaft verkauft. Den Duft der Orangenschale nutzt man zur Herstellung eines Parfû¥ms. Der Tee wird aus getrockneten Orangenschalen hergestellt.",
      genus: "Pflanzenart aus der Familie der  RautengewûÊchse",
      stars: 4.7,
      reviews:[{name: "Kevin W.", text: "Ganz gut in der Regel!"},{name: "Oliver J.", text: "Absoluter Favorit beim Frû¥hstû¥ck"}],
    },
  ]

  addComment(comment: string, index: number) {
    this.fruitlist[index].reviews.push({
        name: "Kevin W.", 
        text: comment
    });
  }
}
