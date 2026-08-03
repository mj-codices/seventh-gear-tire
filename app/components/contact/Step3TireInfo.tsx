"use client";

import { Dispatch, SetStateAction, ChangeEvent } from "react";

export interface TireTypeOptionItem {
  id: string;
  title: string;
}

interface Step3TireInfoProps {
  tireSize: string;
  setTireSize: Dispatch<SetStateAction<string>>;
  selectedTireType: string;
  setSelectedTireType: Dispatch<SetStateAction<string>>;
  tireTypeOptions: TireTypeOptionItem[];
  photoFile?: File | null;
  handlePhotoChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Step3TireInfo({
  tireSize,
  setTireSize,
  selectedTireType,
  setSelectedTireType,
  tireTypeOptions,
  photoFile,
  handlePhotoChange,
}: Step3TireInfoProps) {
  return (
    <div className="pt-4 space-y-7 animate-in fade-in slide-in-from-top-2 duration-300">
      <div>
        <h3 className="text-xs sm:text-xl font-bold text-white/90 font-display tracking-widest uppercase border-b border-stone-800/60 pb-3 leading-6">
          Step 3 — Tire Information
        </h3>
      </div>

      {/* Tire Size Input */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pl-1">
          <label
            htmlFor="tire_size"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
          >
            Tire Size
          </label>
          <span className="pl-5 text-[11px] font-mono text-stone-500 tracking-tight">
            Located on sidewall (e.g. 235/80R16)
          </span>
        </div>
        <input
          type="text"
          id="tire_size"
          name="tire_size"
          value={tireSize}
          onChange={(e) => setTireSize(e.target.value)}
          placeholder="e.g. 225/70R19.5 or 235/80R16"
          className="w-full px-4 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg text-sm sm:text-base text-stone-200 placeholder:text-stone-600 font-medium tracking-wide focus:outline-none focus:border-red-700 focus:bg-stone-950/90 focus:ring-1 focus:ring-red-600 transition-all duration-150"
        />
      </div>

      {/* Type / Position Selection */}
      <div className="space-y-4">
        <div className="flex items-center">
          <h4 className="text-xs uppercase font-display font-bold text-white/60 tracking-wider">
            Type / Position
          </h4>
        </div>

        <div className="flex flex-col space-y-2.5">
          {tireTypeOptions.map((item) => (
            <label
              key={item.id}
              className="flex items-center gap-3.5 px-6 py-3 bg-stone-950/40 border border-stone-800/70 rounded-lg cursor-pointer hover:bg-stone-950 hover:border-red-700/50 transition-all duration-150 has-[:checked]:border-red-700 has-[:checked]:bg-stone-950/90"
            >
              <input
                type="radio"
                name="tire_type_position"
                value={item.id}
                checked={selectedTireType === item.id}
                onChange={(e) => setSelectedTireType(e.target.value)}
                className="h-4 w-4 accent-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer shrink-0"
              />
              <span className="text-sm sm:text-base text-stone-200 font-medium tracking-wide">
                {item.title}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Tire / Sidewall Photo Upload */}
      <div className="space-y-4 overflow-hidden">
        <div className="flex items-center justify-between">
          <label
            htmlFor="tire_photo"
            className="text-xs uppercase font-display font-bold text-white/60 tracking-wider cursor-pointer"
          >
            Damage / Sidewall Photo
          </label>
        </div>

        <label
          htmlFor="tire_photo"
          className={`group flex flex-col items-center justify-center w-full h-28 px-4 bg-stone-950/80 border border-dashed rounded-lg cursor-pointer transition-all duration-150 ${
            photoFile
              ? "border-red-700/80 bg-stone-950"
              : "border-stone-800/80 hover:border-red-700/60 hover:bg-stone-950/80"
          }`}
        >
          <div className="flex flex-col items-center justify-center pt-2 pb-2 text-center">
            {photoFile ? (
              <>
                <p className="text-xs text-stone-200 font-bold truncate max-w-[260px] sm:max-w-md px-4">
                  {photoFile.name}
                </p>
                <p className="text-[10px] text-red-500 font-mono mt-1 font-semibold">
                  {(photoFile.size / (1024 * 1024)).toFixed(2)} MB · Click to
                  replace
                </p>
              </>
            ) : (
              <>
                <p className="text-xs text-stone-300 font-bold">
                  Click to upload or drag a file
                </p>
                <p className="text-[10px] text-stone-500 mt-2">
                  PNG, JPG, HEIC · max 10 MB
                </p>
              </>
            )}
          </div>

          <input
            id="tire_photo"
            name="tire_photo"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handlePhotoChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
}
