import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../environments/environment";

import { User, Deviceinfo, DeviceBaseLine, DeviceToken } from "../_models";

@Injectable({ providedIn: "root" })
export class DeviceService {
  constructor(private http: HttpClient) {}

  getDeviceInfobyUserID(user: User) {
    let params = new HttpParams();
    params = params.append("UserID", user.userId);
    return this.http.get<Deviceinfo[]>(
      `${environment.apiUrl}/device/getdeviceinfobydeviceid`,
      {
        params
      }
    );
  }
  updateSensorStatus(deviceinfo: any) {
    return this.http.post<Deviceinfo[]>(
      `${environment.apiUrl}/device/updatedevicestatus`,
      deviceinfo
    );
  }
}
