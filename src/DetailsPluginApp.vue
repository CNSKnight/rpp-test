<template>
    <div class="detailsPlugin">
        <aside class="row">
            <div class="col s12">
                <app-notifications/>
            </div>
        </aside>
        <main>
            <details-plugin/>
        </main>
    </div>
</template>

<script>
import Notifications from '@/components/notifications/Notifications';
import DetailsPlugin from '@/components/details-plugin/DetailsPlugin';
export default {
  name: 'details-plugin',
  components: {
    'app-notifications': Notifications,
    'details-plugin': DetailsPlugin
  }
};
</script>

<style src="@/assets/details-plugin.scss"/>
