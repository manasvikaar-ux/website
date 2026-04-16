import {
  facilities,
  facilitiesIcons,
  facilityCities,
} from '@/features/resources/data/facilities.data';
import { DarkButton, WhiteButton } from '@/shared/components/neobrutal-button';

const MapIcon = facilitiesIcons.map;

export const FacilitiesSection = () => (
  <section className="border-t border-gray-200 bg-background-cream py-20">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <h2 className="mb-6 font-display text-4xl font-semibold">
            Nearby Care Facilities
          </h2>
          <p className="mb-8 text-gray-600">
            Find verified mental health institutions and hospitals equipped with
            psychiatric wards in major cities.
          </p>
          <div className="mb-6 rounded-xl border border-gray-900 bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <label
              className="mb-2 block text-xs font-semibold tracking-wide text-gray-500 uppercase"
              htmlFor="resource-city"
            >
              Select your City
            </label>
            <select
              className="w-full rounded-md border border-gray-300 p-2.5 text-sm"
              id="resource-city"
            >
              {facilityCities.map((city) => (
                <option key={city} value={city.toLowerCase()}>
                  {city}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-2">
          {facilities.map((facility) => (
            <div
              className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gray-900 bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1 md:flex-row md:items-center"
              key={facility.name}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {facility.name}
                </h3>
                <p className="mb-1 text-sm text-gray-600">{facility.address}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapIcon className="size-4" />
                  {facility.hours}
                  <span className="h-1 w-1 rounded-full bg-gray-400" />
                  {facility.type}
                </div>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <WhiteButton className="flex-1 md:flex-none">
                  View Map
                </WhiteButton>
                <DarkButton className="flex-1 md:flex-none">Call</DarkButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
