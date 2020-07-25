<template>
  <div>
      <v-card>
          <v-tabs @change = "changecurrenttimer" v-model="currentTimer" grow>
              <v-tab  v-for ="timer in timers" :key = "timer.name">
                {{ timer.name }}
              </v-tab>             
          </v-tabs>
          <v-card
                    
                    class = "pa-5 d-flex flex-column justify-center align-center"
                    flat
                    >
                    <h1 class="time">{{displayMinutes}}:{{displaySeconds}}</h1> 
                    <div class="button-group">  
                    <!-- use button groups -->
                    <v-btn @click="start" color = "primary" class="" > <v-icon left small> mdi-play-circle-outline </v-icon> start</v-btn>
                    <v-btn @click="stop" color="error"> <v-icon left small> mdi-stop-circle-outline </v-icon> stop </v-btn>
                    <v-btn @click="reset(timers[currentTimer].minutes)" :disabled="isRunning"  > <v-icon left small> mdi-reload </v-icon> reset </v-btn>
                    </div>
                </v-card>     
                <SettingsDialog :dialog = "dialog" :closeDialog = "closeDialog" :save = "save" :timers = "timers"/> 
                   
      </v-card>

  </div>
</template>
      
<script>
import SettingsDialog from './SettingsDialogue'
export default {
    components:{
        SettingsDialog        
    },
    props:{
        dialog:{
            type:Boolean,
            required:true
        },
        closeDialog:{
            type:Function,
            required:true
        }
    },
    data(){
        return{
            isRunning:false,
           timerInstance: null,           
            totalSeconds : 25 * 60,
            currentTimer:0,
            timers :[
                    {
                        name:'Pomodoro',
                        minutes:25 
                        }, 
                    {
                        name:'short break',
                        minutes:5
                        },
                    {
                        name:'long break',
                        minutes:10
                    }
                ],
                
        }
    },
    computed:{
        displayMinutes: function(){
            const minutes = this.formattime(Math.floor(this.totalSeconds / 60))
            return minutes
        },
        displaySeconds(){
            const seconds = this.totalSeconds % 60 
            return this.formattime(seconds)
            
        }
    },
    methods :{
        formattime(time){
            if (time < 10){
                return '0' + time
            }
            return time.toString();
        },
        start (){            
            this.stop()
            this.isRunning = true
            this.timerInstance = setInterval ( () =>{ 
                                    if(this.totalSeconds <= 0){
                                        this.stop()
                                        return;
                                    }
                                    this.totalSeconds -= 1 
                                    },1000)            
        },
        stop (){
            this.isRunning = false
            clearInterval(this.timerInstance)
        },
        reset(minutes){
            this.stop()
            this.totalSeconds = minutes * 60            
        },
        changecurrenttimer(num){
            // console.log(num);
            this.currentTimer = num
            this.reset(this.timers[num].minutes)
            
        },
        save(updatedTimers){
            this.timers = this.timers.map( (timer , i) =>{
                return {...timer,minutes:parseInt (updatedTimers[i])}
            })
            this.closeDialog()
        }
    }
}
</script>

<style lang = "sass" scoped>
.v-card
    width: 600px
.time 
    font-size: 80px
    font-weight: 400
    text-align : center
.v-btn  
    margin: 0 2px
</style>