import { Clock1 } from "lucide-react";
import ArtistUtil from "../../../utils/ArtistUtil";
import TrackUtil from "../../../utils/TrackUtil";
import { Album } from "../../../types/album";

interface Props {
  album: Album;
}

export default function TracksTable({ album }: Props) {
  return (
    <table className="text-sm text-left mt-4 w-full">
      <thead className="text-xs uppercase">
        <tr>
          <th scope="col">#</th>
          <th scope="col" className="px-6 py-2">
            Name
          </th>
          <th scope="col" className="px-6 py-2">
            <div className="flex flex-row justify-end">
              <Clock1 width={14} />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {album?.tracks.map((track) => {
          return (
            <tr key={track.id}>
              <td>{track.number}</td>
              <td
                scope="row"
                className="px-6 py-2 font-medium whitespace-nowrap flex-1"
              >
                <div className="flex flex-row">{track.name}</div>
                <div className="flex flex-row font-light">
                  {ArtistUtil.getArtistsName(track.artists)}
                </div>
              </td>
              <td className="px-6 py-2">
                <div className="flex flex-row justify-end">
                  {TrackUtil.getMinutage(track.duration_ms)}
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
