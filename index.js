const Input = {
    props: {
        error: {
            type: Boolean,
            required: false,
            default: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        fullwidth: {
            type: Boolean,
            required: false,
            default: false
        },
        starticon: {
            type: Boolean,
            required: false,
            default: false
        },
        endicon: {
            type: Boolean,
            required: false,
            default: false
        },
        size: {
            type: String,
            required: false,
            default: ''
        },
        value: {
            type: String,
            required: false,
            default: ''
        },
        helper: {
            type: String,
            required: false,
            default: ''
        },
        row: {
            type: Number,
            required: false,
            default: 0
        },
        multiline: {
            type: Boolean,
            required: false
        }
    },
    template: `
        <div class="input-container" :class="containerClass">
            <label>Label</label>
            <div class="input-area">
                <i v-if="starticon" class="fas fa-phone-alt start-icon"></i>
    
                <input v-if="!multiline && !row" :class="inputClass" placeholder="Enter something" :value="value != '' ? value : ''"></input>

                <textarea v-else :rows="row"  :class="inputClass" placeholder="Enter something" :value="value != '' ? value : ''"/>

                <i v-if="endicon" class="fas fa-lock end-icon"></i>
            </div>
            <p v-if="helper != ''">{{ helper }}</p>
        </div>
    `,
    data() {
        return {
            containerClass: {
                'input-error': this.error,
            },
            inputClass: {
                sm: this.size && this.size == 'sm',
                md: this.size && this.size == 'md',
                'full-width': this.fullwidth,
                disable: this.disabled
            },

        }
    },
}


let app = new Vue({
    el: '#conteiner',
    data: {

    },
    components: {
        'vue-input': Input
    }
})