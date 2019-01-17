// table.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, flatMap} from 'rxjs/operators';
import { interval } from 'rxjs';
import { startWith } from 'rxjs/operators';


@Injectable()
export class TransitService {
  constructor(private http: HttpClient) { }

  getCommRailData(url: string) {
    return interval(30000)
    .pipe(
      startWith(0),
      flatMap(() => {
        return this
        .http
        .get(url)}),
          map((res:any) => {
            return res.data.map(d => {
              let trip_info = res.included.filter((item) => {
                return item.id === d.relationships.trip.data.id})[0];
              let destination = trip_info.attributes.headsign;
              let train_number = trip_info.attributes.name;
              let track_number = res.included.filter((item) => {
                return item.id === d.relationships.stop.data.id})[0].attributes.platform_code;
              let mapped = {
                'status':d.attributes.status,
                'arrival_time':d.attributes.arrival_time,
                'departure_time':d.attributes.departure_time,
                'headsign':destination,
                'platform_code':(track_number === null) ? "TBA" : track_number,
                'train_num':train_number
              };
              return mapped
            });
          })
    )
  }
}