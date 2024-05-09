/**
 *  Modulation
 * White sound waves on black background change as the user moves their mouse. Labels of modulator frequency and amplitude change as the user moves their mouse too
 * <p>Amplitude Modulation involves two oscillators, referred
 * to as the carrier and the modulator, where the modulator controls
 * the carrier's amplitude.</p>
 *
 * <p>The carrier is typically set at an audible frequency (i.e. 440 Hz)
 * and connected to master output by default. The carrier.amp is
 * set to zero because we will have the modulator control its amplitude.</p>
 *
 * <p>The modulator is disconnected from master output. Instead, it is connected
 * to the amplitude of the Carrier, like this: carrier.amp(modulator).</p>
 *
 * <p>In this example...</p>
 * <p>- MouseX controls the amplitude of the modulator
 * from 0 to 1. When the modulator's amplitude is set to 0, the
 * amplitude modulation has no effect.</p>
 *
 * <p>- MouseY controls the frequency of the modulator from 0 to 20hz.
 * This range is lower frequencies than humans can hear, and we perceive the
 * modulation as a rhythm. This range can simulate effects such as Tremolo.
 * Ring Modulation is a type of Amplitude Modulation where the original
 * carrier signal is not present, and often involves modulation at a faster
 * frequency. </p>
 *
 * <p><em><span class="small">You will need to include the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * for this example to work in your own project.</em></span></p>
 */
 // this is the oscillator we will hear
 // this oscillator will modulate the amplitude of the carrier
 // we'll visualize the waveform

 // alpha

 // connects to master output by default
  // carrier's amp is 0 by default, giving our modulator total control

   // disconnect the modulator from master output


  // Modulate the carrier's amplitude with the modulator
  // Optionally, we can scale the signal.
  

  // create an fft to analyze the audio
  // alpha

  // map mouseY to moodulator freq between 0 and 20hz
   // fade time of 0.1 for smooth fading

  // analyze the waveform
  

  // draw the shape of the waveform