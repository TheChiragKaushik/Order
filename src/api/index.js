import axios from 'axios';

export const speakOrder = async (text) => {
    const data = new FormData();
    data.append('src', text);
    data.append('hl', 'en-us');
    data.append('r', '0');
    data.append('c', 'mp3');
    data.append('f', '8khz_8bit_mono');
    data.append('key', import.meta.env.VITE_TTOS_KEY);

    try {
        const response = await axios.post('https://voicerss-text-to-speech.p.rapidapi.com/', data, {
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_X_RAPIDAPI_KEY,
                'x-rapidapi-host': 'voicerss-text-to-speech.p.rapidapi.com'
            },
            responseType: 'arraybuffer',
        });
        console.log(response);
        
        const audioContext = new window.AudioContext();

        audioContext.decodeAudioData(
            response.data,
            (buffer) => {
                const source = audioContext.createBufferSource();
                source.buffer = buffer;
                source.connect(audioContext.destination);
                source.start(0);
            },
            (decodeError) => {
                console.error('Error decoding audio data:', decodeError);
            }
        );
    } catch (error) {
        console.error(error);
    }
};
