<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users_images', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")
                    ->constrained("users")
                    ->onDelete("Cascade")
                    ->onUpdate("Cascade");
            $table->foreignId("image_id")
                    ->constrained("images")
                    ->onDelete("Cascade")
                    ->onUpdate("Cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users_images');
    }
};
