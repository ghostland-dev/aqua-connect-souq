
export interface WaterPoint {
  id: number;
  lat: number;
  lng: number;
  type: 'well' | 'tap' | 'reservoir';
  status: 'active' | 'inactive' | 'maintenance';
  name: string;
}

// Données des points d'eau avec coordonnées géographiques pour le Maroc
export const waterPoints: WaterPoint[] = [
  { id: 1, lat: 31.63, lng: -8.0, type: "well", status: "active", name: "بئر القرية المركزي" },
  { id: 2, lat: 31.2, lng: -7.9, type: "tap", status: "active", name: "صنبور مدرسة تافراوت" },
  { id: 3, lat: 30.9, lng: -7.8, type: "well", status: "inactive", name: "بئر الوادي القديم" },
  { id: 4, lat: 31.3, lng: -7.7, type: "tap", status: "active", name: "نقطة مياه المستشفى" },
  { id: 5, lat: 31.5, lng: -7.5, type: "well", status: "active", name: "بئر الجبل الشرقي" },
  { id: 6, lat: 31.7, lng: -7.6, type: "reservoir", status: "active", name: "خزان المياه الرئيسي" },
  { id: 7, lat: 31.4, lng: -7.4, type: "tap", status: "maintenance", name: "صنبور الساحة العامة" },
  { id: 8, lat: 31.1, lng: -7.3, type: "reservoir", status: "maintenance", name: "خزان المياه الاحتياطي" },
];
