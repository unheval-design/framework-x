import { inject, ref } from 'vue';
import { GUIDES_SPEECH, LAST_GUIDE_ID } from '../helpers/stagesData';

const useGuideSpeech = () => {
    const guideId = inject('guideId');
    const isPlaying = ref(false);
    const isStarted = ref(false);

    const msg = new SpeechSynthesisUtterance();
    let synth = window.speechSynthesis;
    synth.cancel();
    msg.rate = 7;
    msg.lang = 'es';
    msg.text = GUIDES_SPEECH[guideId.value];

    const playAudio = () => {
        isPlaying.value = !isPlaying.value;
        if (isPlaying.value) {
            if (!isStarted.value) {
                synth.speak(msg);
                isStarted.value = true;
            }
            synth.resume();
        } else {
            synth.pause();
        }
    };

    msg.addEventListener('end', (event) => {
        isPlaying.value = false;
    });

    return { playAudio, isPlaying, isStarted };
};

export default useGuideSpeech;
