import { Component, OnInit } from '@angular/core';
import { TransitData }  from './TransitData';
import { TransitService } from './transit.service';

@Component({
  selector: 'app-transit',
  templateUrl: './transit.component.html',
  styleUrls: ['./transit.component.scss']
})
export class TransitComponent implements OnInit {

  northStationData: TransitData[];
  southStationData: TransitData[];
  current_time: Date;
  northAPI = 'https://api-v3.mbta.com/predictions?page%5Blimit%5D=10&sort=departure_time&include=stop%2Ctrip%2Croute&filter%5Bdirection_id%5D=0&filter%5Broute_type%5D=2&filter%5Bstop%5D=North%20Station%2CNorth%20Station-01%2CNorth%20Station-02%2CNorth%20Station-03%2CNorth%20Station-04%2CNorth%20Station-05%2CNorth%20Station-06%2CNorth%20Station-07%2CNorth%20Station-08%2CNorth%20Station-09%2CNorth%20Station-10'
  southAPI = 'https://api-v3.mbta.com/predictions?page%5Blimit%5D=10&sort=departure_time&include=stop%2Ctrip%2Croute&filter%5Bdirection_id%5D=0&filter%5Broute_type%5D=2&filter%5Bstop%5D=South%20Station%2CSouth%20Station-01%2CSouth%20Station-02%2CSouth%20Station-03%2CSouth%20Station-04%2CSouth%20Station-05%2CSouth%20Station-06%2CSouth%20Station-07%2CSouth%20Station-08%2CSouth%20Station-09%2CSouth%20Station-10%2C%20South%20Station-11%2C%20South%20Station-12%2C%20South%20Station-13'

  constructor(private tservice: TransitService) { }

  ngOnInit() {
    
    this.tservice.getCommRailData(this.northAPI)
    .subscribe((data: TransitData[]) => {
      this.northStationData = data;
    })

    this.tservice.getCommRailData(this.southAPI)
    .subscribe((data: TransitData[]) => {
      this.southStationData = data;
    })

  }
}
