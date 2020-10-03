const Button = {
    props: {
        variant: {
            type: String,
            required: false,
            default: ''
        },
        disableshadow: {
            type: Boolean,
            required: false,
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        starticon: {
            type: String,
            required: false,
            default: ''
        },
        endicon: {
            type: String,
            required: false,
            default: ''
        },
        size: {
            type: String,
            required: false,
            default: ''
        },
        color: {
            type: String,
            required: false,
            default: ''
        }
    },
    template: `
        <button :class="classObject">
            <i v-if="starticon != ''" class="fas fa-cart-arrow-down"></i>
            <slot></slot>
            <i v-if="endicon != ''" class="fas fa-cart-arrow-down"></i>
        </button>
    `,
    data() {
        return {
            classObject: {
                outline: this.variant && this.variant == 'outline',
                text: this.variant && this.variant == 'text' ,
                disableShadow: this.disableshadow,
                disabled: this.disabled,
                'default-size': this.size == 'sn',
                'medium-size': this.size == 'md',
                'big-size': this.size == 'lg',
                'default-color': this.color == 'default',
                'primary-color': this.color == 'primary',
                'second-color': this.color == 'secondary',
                'danger-color': this.color == 'danger',
                'starticon': this.starticon,
                'endicon': this.endicon,
            }
        }
    }
}


let app = new Vue({
    el: '#conteiner',
    data: {

    },
    components: {
        'vue-button': Button
    }
})