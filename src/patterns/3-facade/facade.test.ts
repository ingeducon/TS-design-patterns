import {
  TV,
  Lights,
  SoundSystem,
  TvState,
  HomeAutomationFacade,
} from "./facade";

describe("facade pattern", () => {
  it("should run the movie scene for a home automated system", () => {
    const tv = new TV();
    const lights = new Lights();
    const soundSystem = new SoundSystem();

    expect(tv.getState()).toEqual(TvState.Off);
    expect(lights.getLevel()).toEqual(0);
    expect(soundSystem.getVolume()).toEqual(0);

    const homeAutomation = new HomeAutomationFacade(soundSystem, lights, tv);
    homeAutomation.watchMovie();

    expect(tv.getState()).toEqual(TvState.On);
    expect(lights.getLevel()).toEqual(40);
    expect(soundSystem.getVolume()).toEqual(100);
  });
});
