import { Observable, Frame, Utils } from '@nativescript/core';
import { Sound } from '@nativescript/core/ui/audio';

export class MeditationViewModel extends Observable {
    private _meditationComplete = false;
    private _mantraSound: Sound;
    private _meditationTimer: number;

    constructor() {
        super();
        this._mantraSound = new Sound({
            audioFile: '~/assets/sounds/om-mantra.mp3',
            loop: true
        });
        this.startMeditation();
    }

    get meditationComplete(): boolean {
        return this._meditationComplete;
    }

    private startMeditation() {
        this._mantraSound.play();
        
        // Show analysis button after 30 seconds of meditation
        this._meditationTimer = setTimeout(() => {
            this._meditationComplete = true;
            this.notifyPropertyChange('meditationComplete', true);
        }, 30000);
    }

    beginAnalysis() {
        this._mantraSound.stop();
        clearTimeout(this._meditationTimer);
        
        Frame.topmost().navigate({
            moduleName: "views/prashna/prashna-page",
            clearHistory: false
        });
    }

    onUnloaded() {
        if (this._mantraSound) {
            this._mantraSound.stop();
            this._mantraSound.dispose();
        }
        clearTimeout(this._meditationTimer);
    }
}