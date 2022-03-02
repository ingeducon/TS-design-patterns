export class SoundSystem {
  private volume: number = 0;

  setVolume(volumeLevel: number) {
    this.volume = volumeLevel;
  }
  getVolume(): number {
    return this.volume;
  }
}

export class Lights {
  private level: number = 0;

  setLevel(level: number) {
    this.level = level;
  }
  getLevel(): number {
    return this.level;
  }
}

export class TV {
  private state: TvState = TvState.Off;
  constructor() {
    this.turnOff;
  }

  turnOn() {
    this.state = TvState.On;
  }

  turnOff() {
    this.state = TvState.Off;
  }

  getState(): TvState {
    return this.state;
  }
}
//----estados------

export enum TvState {
  On,
  Off,
}

// ----
export class HomeAutomationFacade {
  private soundSystem: SoundSystem;
  private lights: Lights;
  private tv: TV;

  constructor(soundSystem: SoundSystem, lights: Lights, tv: TV) {
    this.soundSystem = soundSystem;
    this.lights = lights;
    this.tv = tv;
  }

  public watchMovie() {
    this.tv.turnOn();
    this.soundSystem.setVolume(100);
    this.lights.setLevel(40);
  }

  endMovie() {
    this.tv.turnOff();
  }
}

/*
let soundSystem = new SoundSystem();
let lights = new Lights();
let tv = new TV();

let homeAutomation = new HomeAutomationFacade(soundSystem, lights, tv);
homeAutomation.watchMovie();*/
